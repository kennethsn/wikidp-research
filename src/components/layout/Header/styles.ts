import { Theme } from '@mui/material/styles';

import { Images } from '../../../constants';


const styles = {
  container: ({ breakpoints }: Theme) => ({
    alignItems: 'end',
    background: '#1d88e585',
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: '100%',
    [breakpoints.down('sm')]: {
      justifyContent: 'center',
      textAlign: 'center',
    },
  }),
  root: {
    backgroundImage: `url(${Images.collectionHeader})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  title: ({ palette }: Theme) => ({
    color: palette.background.paper,
    textShadow: '1px 2px 6px black',
    p: 5,
    pb: 3,
  }),
};

export default styles;
