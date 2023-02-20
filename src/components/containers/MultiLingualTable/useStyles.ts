import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(4),
  },
  headerItem: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  loaderContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  root: {
    margin: '0 auto',
    maxWidth: 900,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  tableInner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export default useStyles;
