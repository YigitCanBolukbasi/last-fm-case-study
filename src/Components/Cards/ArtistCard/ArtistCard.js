import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ArtistCard.styles';
import {useContext} from 'react';
import ThemeContext from '../../../Contexts/ThemeContext';

const ArtistCard = ({artist, onSelect}) => {
  const {theme} = useContext(ThemeContext);

  const image = artist.image.filter(i => i.size === 'extralarge');

  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.shadow_container}>
        <View style={theme ? styles.container_dark : styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: image[0]['#text'],
            }}
          />
          <View style={styles.body_container}>
            <View style={styles.title_container}>
              <Text style={theme ? styles.title_dark : styles.title}>
                Artist
              </Text>
              <Text style={theme ? styles.artist_dark : styles.artist}>
                {artist.name}
              </Text>
            </View>
            <View style={styles.inner_container}>
              <Text style={theme ? styles.text_dark : styles.text}>
                Playcount:{artist.playcount}
              </Text>
              <Text style={theme ? styles.text_dark : styles.text}>
                Listeners:{artist.listeners}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArtistCard;
