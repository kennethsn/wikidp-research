import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Else, If, Then, When } from 'react-if';

import { WikibaseChatSampleMessages } from '../../../constants';
import { ChatHistory, WikibaseEntity } from '../../../types';
import { isEnterWithoutShift } from '../../../utils/keyboard';
import sleep from '../../../utils/sleep';
import AppTooltip from '../../presentational/AppTooltip/AppTooltip';
import Conversation from '../../presentational/Conversation/Conversation';
import EntityCard from '../../presentational/EntityCard/EntityCard';
import styles from './styles';


interface ChatConversationContainerProps {
  chatHistory: ChatHistory;
  disabled: boolean;
  entity?: WikibaseEntity;
  loading: boolean;
  message: string;
  onChange: (messgae: string) => void;
  onReset: () => void;
  onSubmit: () => Promise<void>;
}

const convoScrollerId = 'convoScroller';

export default function ChatConversationContainer({
  chatHistory,
  disabled,
  entity,
  loading,
  message,
  onChange,
  onReset,
  onSubmit,
}: ChatConversationContainerProps) {
  
  const showConvo = !!entity || loading;
  const showStartOver = !!chatHistory.length || !!entity;

  const scrollToConvoBottom = async () => {
    await sleep(100);
    const objDiv = document.getElementById(convoScrollerId);
    objDiv?.scrollTo({ behavior: 'smooth', top: objDiv.scrollHeight });
  }
  const submit = () => {
    if (disabled) {
      return false;
    }
    onSubmit()
      .then(() => scrollToConvoBottom());
    scrollToConvoBottom();
  }
  
  const handleSampleMessageButtonClick = (sampleMessage: string) => () => onChange(sampleMessage);
  const handleStartOverButtonClick = () => onReset();
  const handleSubmitButtonClick = () => submit();
  const handleTextFieldChange: TextFieldProps['onChange'] = (e) => onChange(e.target.value);
  const handleTextFieldKeyDown: TextFieldProps['onKeyDown'] = (e) => {
    if(isEnterWithoutShift(e)) {
      e.preventDefault();
      submit();
    }
  }

  return (
    <Grid
      container
      spacing={5}
      sx={styles.root}
    >
      <If condition={showConvo}>
        <Then>
          <Grid xs={12}>
            <Paper
              elevation={4}
              square
              sx={styles.paper}
            >
              <When condition={!!entity}>
                {() => (
                  <>
                    <AppTooltip
                      sx={styles.titleTooltip}
                      title={(
                        <EntityCard entity={entity!} />
                      )}
                    >
                      <Typography
                        sx={styles.title}
                        variant="h4"
                      >
                        {entity!.label}
                        <AutoFixHighOutlinedIcon
                          sx={styles.titleIcon}
                        />
                      </Typography>
                    </AppTooltip>
                    <Divider sx={styles.divider} />
                  </>
                )}
              </When>
              <Grid
                id={convoScrollerId}
                sx={styles.conversation}
              >
                <Conversation
                  chatHistory={chatHistory}
                  loading={loading}
                  message={message}
                />
              </Grid>
            </Paper>
          </Grid>
        </Then>
        <Else>
          <Grid
            sx={styles.sampleMessages}
            xs={12}
          >
            {WikibaseChatSampleMessages.map((sampleMessage, i) => (
              <Button
                color="inherit"
                key={`${i}-sample-msg`}
                onClick={handleSampleMessageButtonClick(sampleMessage)}
                size="small"
                startIcon={(
                  <AutoAwesomeSharpIcon sx={styles.sampleButtonIcon} />
                )}
                sx={styles.sampleButton}
                variant="outlined"
              >
                {sampleMessage}
              </Button>
            ))}
          </Grid>
        </Else>
      </If>
      <Grid
        sx={styles.inputContainer}
        xs={12}
      >
        <TextField
          disabled={loading}
          fullWidth
          helperText="ChatWikiDP can make mistakes. Consider checking important information."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  disabled={disabled}
                  onClick={handleSubmitButtonClick}
                >
                  <SendSharpIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          maxRows={35}
          multiline
          onChange={handleTextFieldChange}
          onKeyDown={handleTextFieldKeyDown}
          placeholder="Message ChatWikiDP..."
          sx={styles.input}
          value={message}
        />
        <When condition={showStartOver}>
          <Button
            color="secondary"
            endIcon={(
              <ReplaySharpIcon />
            )}
            onClick={handleStartOverButtonClick}
            size="small"
            variant="text"
          >
            Start Over?
          </Button>
        </When>
      </Grid>
    </Grid>
  );
}
