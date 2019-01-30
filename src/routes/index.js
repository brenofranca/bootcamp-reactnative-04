import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';

import Home from '~/pages/Home';
import Favorites from '~/pages/Favorites';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
      Favorites: { screen: Favorites }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primaryDark
        },
        headerTintColor: colors.white,
        headerBackTitle: null
      }
    }
  )
);

export default Routes;
