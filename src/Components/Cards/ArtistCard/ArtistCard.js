import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import styles from './ArtistCard.styles';

const ArtistCard = ({artist}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image style={styles.image} />
        <View style={styles.body_container}>
          <View style={styles.title_container}>
            <Text>Artist {artist.name}</Text>
          </View>
          <View style={styles.inner_container}>
            <Text>{artist.playcount}</Text>
            <Text>{artist.listeners}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ArtistCard;
