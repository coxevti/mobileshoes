import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 25,
  },
});

console.tron.log('Hello shoes');

export default function App() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>MobileShoes</Text>
    </View>
  );
}
