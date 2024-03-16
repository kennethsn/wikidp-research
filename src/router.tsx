import { createBrowserRouter } from 'react-router-dom';

import { RoutePaths } from './constants';
import ChatWikiDP from './views/ChatWikiDP/ChatWikiDP';
import Home from './views/Home/Home';
import MultiLingualTable from './views/MultiLingualTable/MultiLingualTable';


const router = createBrowserRouter([
  {
    Component: ChatWikiDP,
    path: RoutePaths.ChatWikiDP,
  },
  {
    Component: Home,
    path: RoutePaths.Home,
  },
  {
    Component: MultiLingualTable, 
    path: RoutePaths.MultiLingualTable,
  }
]);

export default router;
