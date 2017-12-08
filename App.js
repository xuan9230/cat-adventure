import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from 'src/Router';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>猫猫的世界</Text>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
