import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

import colors from './styles/colors';

const Routes = createAppContainer(
    createStackNavigator(
        {Main, Cart},
        {
            defaultNavigationOptions: {
                headerShown: false,
                cardStyle: {
                    backgroundColor: colors.dark,
                },
            },
        }
    )
);

export default Routes;
