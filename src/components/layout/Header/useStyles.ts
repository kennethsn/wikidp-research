import { makeStyles } from '@material-ui/core/styles';

import { Images } from '../../../constants';


const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'end',
    background: '#1d88e585',
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  root: {
    backgroundImage: `url(${Images.collectionHeader})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  title: {
    color: theme.palette.background.paper,
    textShadow: '1px 2px 6px black',
    padding: theme.spacing(5),
    paddingBottom: theme.spacing(3),
  },
}));

export default useStyles;
