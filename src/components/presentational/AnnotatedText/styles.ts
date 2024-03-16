import { lighten, Theme } from '@mui/material/styles';


const styles = {
  annotated: ({ palette }: Theme) => ({
    bgcolor: lighten(palette.success.main, .85),
    display: 'inline',
    mx: .1,
    borderRadius: 1,
    px: .5,
    '&:hover': {
      bgcolor: lighten(palette.success.main, .7),
    },
    whiteSpace: 'pre-line',
  }),
  text: {
    display: 'inline',
    whiteSpace: 'pre-line',
  },
};

export default styles;
