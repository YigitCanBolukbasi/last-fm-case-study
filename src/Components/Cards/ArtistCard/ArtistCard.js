import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ArtistCard.styles';

const ArtistCard = ({artist, onSelect}) => {
  const image = artist.image.filter(i => i.size === 'extralarge');

  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.shadow_container}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: image[0]['#text'],
            }}
          />
          <View style={styles.body_container}>
            <View style={styles.title_container}>
              <Text style={styles.title}>Artist</Text>
              <Text style={styles.artist}>{artist.name}</Text>
            </View>
            <View style={styles.inner_container}>
              <Text style={styles.text}>Playcount:{artist.playcount}</Text>
              <Text style={styles.text}>Listeners:{artist.listeners}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArtistCard;
