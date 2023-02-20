import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    boxShadow: '0px -5px 15px 5px #00000054',
    paddingBottom: theme.spacing(10),
  },
  spacer: {
    height: 150,
    width: '100%',
  }
}));

export default useStyles;
