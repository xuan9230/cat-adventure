import { StackNavigator } from 'react-navigation';
import AdventureScreen from './containers/AdventureScreen';
import HomeScreen from './containers/HomeScreen';

const RootNavigator = StackNavigator(
  {
    Home: {
        screen: HomeScreen,
    },
    Adventure: {
        screen: AdventureScreen,
    },
  },
  { headerMode: 'screen' }
);

export default RootNavigator;

