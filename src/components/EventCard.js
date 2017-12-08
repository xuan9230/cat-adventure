import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements'
import PropTypes from 'prop-types';

const EventCard = ({
  image,
  style,
  title,
  text,
}) => {
  return (
    <Card
      containerStyle={style}
      title={title}
      image={image || require('../../assets/images/cat1.png')}
    >      
      <Text>
        {text}
      </Text>
    </Card>
  )
};

EventCard.propTypes = {
  image: PropTypes.string,
  style: PropTypes.number,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default EventCard;