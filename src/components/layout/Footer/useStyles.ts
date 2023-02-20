import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.background.default,
    margin: theme.spacing(3),
  },
  container: {
    margin: '0 auto',
    maxWidth: 800,
    width: '100%',
  },
  credit: {
    padding: theme.spacing(1),
  },
  logo: {
    maxHeight: theme.typography.h2.fontSize,
    maxWidth: '100%',
  },
  root: {
    background: '#f6f4f3',
    maxWidth: '100%',
    padding: theme.spacing(5),
  },
}));

export default useStyles;
