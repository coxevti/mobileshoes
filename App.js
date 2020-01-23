import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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

export default function App() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>MobileShoes</Text>
    </View>
  );
}
