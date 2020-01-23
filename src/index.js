import React from 'react';
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import Routes from './routes';
import colors from './styles/colors';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
}
