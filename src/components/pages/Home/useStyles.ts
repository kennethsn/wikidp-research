import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(.5),
  },
  titleSection: {
    margin: '0 auto',
    maxWidth: 700,
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.h3.fontSize,
      padding: theme.spacing(2),
    },
  },
}));

export default useStyles;
