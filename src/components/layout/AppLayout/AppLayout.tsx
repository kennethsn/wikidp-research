import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

import { APP_NAME } from '../../../constants';
import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageTitle from '../PageTitle/PageTitle';
import styles from './styles';


interface Props extends PropsWithChildren {
  title?: string;
}

const AppLayout = ({ children, title }: Props) => {
  return (
    <Box sx={styles.root}>
      <PageTitle title={title} />
      <Header label={APP_NAME} />
      <Box sx={styles.pageContainer}>
        <AppBar/>
        {children}
        <Box sx={styles.spacer} />
      </Box>
      <Footer/>
    </Box>
  );
};

export default AppLayout;
