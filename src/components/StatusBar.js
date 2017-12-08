import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Slider } from 'react-native-elements'
import PropTypes from 'prop-types';

const StatusBar = ({
  name,
  icon,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Icon name={icon} />
      <Slider
        disabled
        value={value}
        style={styles.slider}
      />
    </View>
  );
};

StatusBar.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default StatusBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  slider: {
    width: 120,
    marginLeft: 15,
    marginRight: 15,
  }
});