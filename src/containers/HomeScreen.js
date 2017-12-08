import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-elements'

class HomeScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Maomao's Adventure</Text>
        <Divider />
        <View style={styles.buttonGroup}>
          <Button
            raised
            large
            icon={{name: 'pets'}}
            containerViewStyle={{ marginBottom: 30 }}
            backgroundColor="salmon"
            title="New"
            onPress={() => this.props.navigation.navigate('Adventure')}
          />
          <Button
            raised
            large
            icon={{name: 'flag'}}
            backgroundColor="sandybrown"
            title="Rank"
            onPress={() => this.props.navigation.navigate('Rank')}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginTop: 80,
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    width: 150,
    marginTop: 20,
    marginBottom: 20, 
  }
});