import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Ariadne's Thread",
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome back!</Text>
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
