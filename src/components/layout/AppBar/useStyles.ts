import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  link: {
    borderRadius: 0,
    borderBottom: '2px solid transparent',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: theme.spacing(2),
    paddingBottom: 0,
    textTransform: 'initial',
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
      fontWeight: 'inherit',
    },
  },
  linkActive: {
    borderColor: theme.palette.primary.main,
  },
  navLinks: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    },
  },
  search: {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    marginLeft: 0,
    marginRight: theme.spacing(2),
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
  },
  searchIcon: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    pointerEvents: 'none',
    position: 'absolute',
  },
}));

export default useStyles;
