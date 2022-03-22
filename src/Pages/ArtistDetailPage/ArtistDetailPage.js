import {View, FlatList, ActivityIndicator, Image, Text} from 'react-native';
import React from 'react';

import styles from './ArtistDetailPage.styles';
import useFetch from '../../Hooks/useFetch/useFetch';
import ProductCard from '../../Components/Cards/ProductCard/ProductCard';
import {useContext} from 'react';
import ThemeContext from '../../Contexts/ThemeContext';
import Config from 'react-native-config';

const ArtistDetailPage = ({route}) => {
  const {theme} = useContext(ThemeContext);
  const {mbid, name, image} = route.params;

  const artistImage = image.filter(i => i.size === 'extralarge');

  const topAlbums = useFetch(
    'topAlbums',
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${mbid}&api_key=${Config.API_KEY}&format=json`,
  );

  const topTracks = useFetch(
    'toptracks',
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${mbid}&api_key=${Config.API_KEY}&format=json`,
  );

  const RenderAlbumsAndTracks = ({item}) => <ProductCard product={item} />;

  if (topAlbums.isLoading || topTracks.isLoading) {
    return <ActivityIndicator size={'large'} />;
  }

  if (topAlbums.error || topTracks.error) {
    return (
      <Text>
        {topAlbums.error}
        {topTracks.error}
      </Text>
    );
  }
  return (
    <View style={theme ? styles.container_dark : styles.container}>
      <View style={styles.artist_shadow}>
        <View style={theme ? styles.artist_card_dark : styles.artist_card}>
          <Image
            style={styles.artist_image}
            source={{
              uri: artistImage[0]['#text'],
            }}
          />
          <Text style={theme ? styles.artist_text_dark : styles.artist_text}>
            {name}
          </Text>
        </View>
      </View>
      <View style={theme ? styles.inner_containerdark : styles.inner_container}>
        <View style={styles.albums_container}>
          <Text style={theme ? styles.text_dark : styles.text}>Top Albums</Text>
          <FlatList
            renderItem={RenderAlbumsAndTracks}
            data={topAlbums?.data?.topalbums?.album}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        </View>
        <View>
          <Text style={theme ? styles.text_dark : styles.text}>Top Tracks</Text>
          <FlatList
            renderItem={RenderAlbumsAndTracks}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            data={topTracks?.data?.toptracks?.track}
            style={styles.track_container}
          />
        </View>
      </View>
    </View>
  );
};

export default ArtistDetailPage;
