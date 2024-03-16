import { Theme } from '@mui/material/styles';


const styles = {
  actions: {
    justifyContent: 'flex-end',
  },
  aliasChip: ({ palette }: Theme) => ({
    bgcolor: palette.background.grey,
    color: palette.text.secondary,
    fontWeight: 400,
    pl: 1,
    m: .4,
  }),
  aliases: {
    px: 1,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    maxWidth: 300,
  },
  logo: {
    maxHeight: 65,
    mb: 1,
    objectFit: 'contain',
  },
  root: {
    display: 'flex',
  },
};

export default styles;
