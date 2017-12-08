import { StackNavigator } from 'react-navigation';

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Adventure: {
        screen: AdventureScreen,
    },
});

export default RootNavigator;

