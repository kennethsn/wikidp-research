import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Else,
  If,
  Then,
  When,
} from 'react-if';

import { Images } from '../../../constants';
import { ChatHistory, TextAnnotation } from '../../../types';
import { isAIMessage, isUserMessage } from '../../../utils/chat';
import AnnotatedText from '../../presentational/AnnotatedText/AnnotatedText';
import styles from './styles';


interface ConversationProps {
  chatHistory: ChatHistory;
  loading: boolean;
  message: string;
}

const annotationKey = ({ start }: TextAnnotation, index: number) => `${start}-${index}`;
const chatKey = (i: number) => `${i}-message`;

export default function Conversation({ chatHistory, loading, message }: ConversationProps) {
  return (
    <Grid
      container
      spacing={5}
    >
      {chatHistory.map((item, i) => (
        <Grid
          key={chatKey(i)}
          sx={styles.chatRow(isUserMessage(item))}
          xs={12}
        >
          <Box>
            <When condition={isAIMessage(item)}>
              <Box sx={styles.from}>
                <Avatar
                  alt="ChatWikiDP"
                  src={Images.wikidp}
                  sx={styles.avatar}
                />
                <Typography
                  sx={styles.avatarTitle}
                  variant="subtitle2"
                >
                  ChatWikiDP
                </Typography>
              </Box>
            </When>
            <Box
              className={`${item.agent}-message`}
              sx={styles.messageContainer}
            >
              <If condition={item.annotations?.length}>
                <Then>
                  {item.annotations?.map(((annotation, i) => (
                    <AnnotatedText
                      annotation={annotation}
                      key={annotationKey(annotation, i)}
                    />
                  )))}
                </Then>
                <Else>
                  {item.message}
                </Else>
              </If>
            </Box>
          </Box>
        </Grid>
      ))}
      <When condition={loading}>
        <Grid
          sx={styles.chatRow(true)}
          xs={12}
        >
          <Box
            className="preview"
            sx={styles.messageContainer}
          >
            {message}
          </Box>
        </Grid>
        <Grid
          sx={styles.chatRow(false)}
          xs={12}
        >
          <Typography
            className="loading"
            color="text.secondary"
            sx={styles.loadingMessage}
            variant="subtitle1"
          >
            Generating AI Response
          </Typography>
        </Grid>
      </When>
    </Grid>
  );
}
