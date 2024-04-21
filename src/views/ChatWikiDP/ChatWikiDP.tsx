import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

import { aiWikibaseChat } from '../../api';
import ChatConfigForm from
  '../../components/containers/ChatConfigForm/ChatConfigForm';
import ChatConversationContainer from
  '../../components/containers/ChatConversationContainer/ChatConversationContainer';
import AppLayout from '../../components/layout/AppLayout/AppLayout';
import { OPENAI_API_KEY, WikibaseChatDomain } from '../../constants';
import { ChatHistory, ChatWikiDPPropertyInstruction, WikibaseEntity } from '../../types';
import { buildAPIChatHistory } from '../../utils/chat';
import styles from './styles';


export default function ChatWikiDP() {
  const [apiKey, setApiKey] = useState(OPENAI_API_KEY || '');
  const [entity, setEntity] = useState<WikibaseEntity | undefined>();
  const [message, setMesssage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatHistory>([]);
  const [propertyInstructions, setPropertyInstructions] = (
    useState<Array<ChatWikiDPPropertyInstruction>>([])
  );
  const [wikibaseId, setWikibaseId] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [configPanelExpanded, setconfigPanelExpanded] = useState(true);
  const [convoPanelExpanded, setConvoPanelExpanded] = useState(false);

  const needsAPIKey = !apiKey;
  const needsMessage = message.length < 3;
  const disabled = needsAPIKey || needsMessage || isLoading;

  const clearMessage = () => setMesssage('');
  const loadEntity = (entity: WikibaseEntity) => {
    setEntity(entity);
    if (!wikibaseId) {
      setWikibaseId(entity.id);
    }
  }

  const handleConfigFormApiKeyChange = (newApiKey: string) => {
    setApiKey(newApiKey);
    if (newApiKey.length > 10 && !convoPanelExpanded) {
      setConvoPanelExpanded(true);
    }
  };
  const handleConfigFormPropInstructionsChange = (newValue: ChatWikiDPPropertyInstruction[]) => {
    setPropertyInstructions(newValue)
  };
  const handleConfigFormWikibaseIdChange = (newWikibaseId: string) => setWikibaseId(newWikibaseId);
  const handleConfigPanelChange = () => setconfigPanelExpanded(!configPanelExpanded);
  const handleConvoPanelChange = () => setConvoPanelExpanded(!convoPanelExpanded);
  const handleConversationChange = (input: string) => setMesssage(input);
  const handleReset = () => {
    setChatHistory([]);
    clearMessage();
    setEntity(undefined);
    setWikibaseId(undefined);
  }
  const handleSubmit = async () => {
    setIsLoading(true);
    setconfigPanelExpanded(false);
    try {
      const { annotations, entity, message: aiMessage } = await aiWikibaseChat({
        api_key: apiKey,
        domain: WikibaseChatDomain,
        entity_id: wikibaseId || undefined,
        history: buildAPIChatHistory(chatHistory),
        message,
        property_instructions: propertyInstructions.length ? propertyInstructions : undefined,
      });

      loadEntity(entity);
      setChatHistory([
        ...chatHistory,
        { agent: 'human', message },
        { agent: 'ai', annotations, message: aiMessage },
      ]);
      clearMessage();
    } catch(e) {
      alert('There was an issue processing this passage.');
      console.error(e);
    }
    setIsLoading(false);
  }

  return (
    <AppLayout title="ChatWikiDP">
      <Grid
        container
        spacing={3}
        sx={styles.container}
      >
        <Grid xs={12}>
          <Accordion
            expanded={configPanelExpanded}
            onChange={handleConfigPanelChange}
            square
          >
            <AccordionSummary>
              <SettingsSuggestOutlinedIcon />
              <Typography
                sx={styles.accordionTitle}
                variant="h5"
              >
                Configuration Settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ChatConfigForm
                apiKey={apiKey}
                onApiKeyChange={handleConfigFormApiKeyChange}
                onPropertyInstructionsChange={handleConfigFormPropInstructionsChange}
                onWikibaseIdChange={handleConfigFormWikibaseIdChange}
                propertyInstructions={propertyInstructions}
                wikibaseId={wikibaseId}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={convoPanelExpanded}
            onChange={handleConvoPanelChange}
            square
            sx={styles.convoAccordion}
          >
            <AccordionSummary>
              <AutoFixHighOutlinedIcon />
              <Typography 
                sx={styles.accordionTitle}
                variant="h5"
              >
                AI-Generated Chat
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ChatConversationContainer
                chatHistory={chatHistory}
                disabled={disabled}
                entity={entity}
                loading={isLoading}
                message={message}
                onChange={handleConversationChange}
                onSubmit={handleSubmit}
                onReset={handleReset}
              />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </AppLayout>
  );
}
