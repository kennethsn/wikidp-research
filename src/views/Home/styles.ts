import { Theme } from '@mui/material/styles';


const styles = {
  text: ({ palette }: Theme) => ({
    '& a': {
      color: palette.primary.main,
      pl: .5,
    },
  }),
  titleSection: ({ breakpoints, typography }: Theme) => ({
    textAlign: 'center',
    '& > div': {
      m: '0 auto',
      maxWidth: 700,
      p: 4,
      [breakpoints.down('sm')]: {
        fontSize: typography.h3.fontSize,
        p: 2,
      },
  }}),
};

export default styles;
