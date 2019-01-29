import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';

const Routes = createAppContainer(
  createStackNavigator({
    Home,
  }),
);

export default Routes;
