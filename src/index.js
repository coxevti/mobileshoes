import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import Routes from './routes';
import colors from './styles/colors';
import Header from './components/Header';
import NavigationService from './services/navigation';
import store from './store';

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.primary}
            />
            <Header />
            <Routes
                ref={navigatorRef =>
                    NavigationService.setNavigator(navigatorRef)
                }
            />
        </Provider>
    );
}
