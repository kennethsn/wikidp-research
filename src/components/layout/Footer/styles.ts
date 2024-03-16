import { Theme } from '@mui/material';

const styles = {
  button: ({ palette, typography }: Theme) => ({
    color: palette.background.default,
    m: 3,
    '& img': {
      maxHeight: typography.h2.fontSize,
      maxWidth: '100%',
    }
  }),
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: 600,
    width: '100%',
  },
  credit: {
    p: 1,
  },
  root: {
    background: '#f6f4f3',
    maxWidth: '100%',
    p: 5,
    textAlign: 'center',
  },
};

export default styles;
