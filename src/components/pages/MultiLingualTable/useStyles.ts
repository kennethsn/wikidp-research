import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(3),
  },
  link: {
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(.5),
  },
}));

export default useStyles;
