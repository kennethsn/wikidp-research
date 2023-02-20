import React, { ReactNode } from 'react';

import { APP_NAME } from '../../../constants';
import AppBar from '../AppBar';
import Footer from '../Footer';
import Header from '../Header';
import PageTitle from '../PageTitle';
import useStyles from './useStyles';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <>
      <PageTitle />
      <Header label={APP_NAME} />
      <div className={classes.pageContainer}>
        <AppBar/>
        {children}
        <div className={classes.spacer} />
      </div>
      <Footer/>
    </>
  );
};

export default AppLayout;
