import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/pages/Home';
import MultiLingualTablePage from '../components/pages/MultiLingualTable';
import { RoutePaths } from '../constants';

const router = (
  <Switch>
    <Route
      component={MultiLingualTablePage}
      path={RoutePaths.MultiLingualTable}
    />
    <Route
      component={HomePage}
      path={RoutePaths.Home}
    />
  </Switch>
);

export default router;
