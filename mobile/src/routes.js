import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main';
import Profile from './pages/Profile';
import Chat from './pages/Chat';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil do Github'
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        title: 'ChatDev'
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#ffffff',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7d40e7',
      }
    }
  })
);

export default Routes;