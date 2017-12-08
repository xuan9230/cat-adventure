import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventCard from '../components/EventCard';
import StatusBar from '../components/StatusBar';

class AdventureScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const event = {
      title: 'First',
      text: 'Test',
      image: null
    };

    return (
      <View style={styles.container}>
        <View style={styles.statusContainer}>
          <StatusBar name="Health" icon="favorite" value={0.5} />
          <StatusBar name="Charm" icon="mood" value={0.7} />
          <StatusBar name="Fish" icon="local-dining" value={0.3} />
        </View>
        <EventCard
          {...event}
          style={styles.card}
        />
      </View>
    );
  }
}

export default AdventureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusContainer: {
  },
  card: {
    flex: 1,
    marginBottom: 10,
  },
});