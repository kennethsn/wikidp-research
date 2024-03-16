import { Theme } from '@mui/material/styles';


const styles = {
  button: ({ breakpoints, palette }: Theme) => ({
    borderRadius: 0,
    borderBottom: '2px solid transparent',
    fontSize: 10,
    fontWeight: 'bold',
    mr: 2,
    pb: 0,
    textTransform: 'initial',
    '&:hover': {
      borderColor: palette.primary.main,
    },
    [breakpoints.up('sm')]: {
      fontSize: 20,
      fontWeight: 'inherit',
    },
    '&.--active': {
      borderColor: palette.primary.main,
    }
  }),
  navLinks: ({ breakpoints }: Theme) => ({
    '> div': {
      display: 'none',
      [breakpoints.up('xs')]: {
        display: 'flex',
      },
    }
  }),
  root: ({ breakpoints }: Theme) => ({
    alignItems: 'flex-end',
    flexGrow: 1,
    justifyContent: 'space-between',
    p: 4,
    pt: 2,
    [breakpoints.down('sm')]: {
      justifyContent: 'center',
      p: 2,
    },
  }),
};

export default styles;
