import { Theme } from '@mui/material/styles';


const styles = {
  avatar: ({ palette }: Theme) => ({
    border: '1px solid',
    borderColor: palette.grey[400],
    display: 'inline-block',
    mb: 0.5,
    mr: 1,
    height: 24,
    width: 24,
  }),
  avatarTitle: {
    display: 'inline',
    verticleAlign: 'middle',
  },
  chatRow: (isFromUser: boolean) => ({
    display: 'flex',
    justifyContent: isFromUser ? 'flex-end' : 'flex-start',
    mx: 5,
    my: 0,
    py: 0.5,
  }),
  from: ({ palette }: Theme) => ({
    alignItems: 'center',
    color: palette.text.secondary,
    display: 'flex',
    mb: 1,
    mx: 2,
  }),
  loadingMessage: {
    fontWeight: 300,
  },
  messageContainer: ({ palette }: Theme) => ({
    border: '1px solid',
    borderColor: palette.grey[300],
    borderRadius: 3,
    maxWidth: 500,
    p: 3,
    '&.human-message': {
      bgcolor: palette.background.grey,
    },
    '&.preview': {
      borderStyle: 'dashed',
    },
  }),
};

export default styles;
