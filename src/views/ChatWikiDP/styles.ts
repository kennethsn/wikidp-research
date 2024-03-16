import { Theme } from '@mui/material/styles';


const styles = {
  accordionTitle: {
    pl: 1,
  },
  container: {
    justifyContent: 'center',
    maxWidth: 1200,
    mb: 5,
    mx: 'auto',
    p: 8,
  },
  convoAccordion: ({ palette }: Theme) => ({
    bgcolor: palette.background.grey
  }),
};

export default styles;
