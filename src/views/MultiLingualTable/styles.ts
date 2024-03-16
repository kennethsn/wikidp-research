import { Theme } from '@mui/material/styles';


const styles = {
  header: {
    p: 3,
    textAlign: 'center',
  },
  subtitle: ({ palette }: Theme) => ({
    '& a': {
      color: palette.primary.main,
      pl: .5,
    },
  }),
};

export default styles;
