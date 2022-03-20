import {View, FlatList, ActivityIndicator, Image, Text} from 'react-native';
import React from 'react';

import styles from './DetailPage.styles';
import useFetch from '../../Hooks/useFetch/useFetch';
import ProductCard from '../../Components/Cards/ProductCard/ProductCard';
import Config from 'react-native-config';
import {useContext} from 'react';
import ThemeContext from '../../Contexts/ThemeContext';

const DetailPage = ({route}) => {
  const {theme} = useContext(ThemeContext);
  const {mbid, name} = route.params;

  const topAlbums = useFetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${mbid}&api_key=${Config.API_KEY}&format=json`,
  );

  const topTracks = useFetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${mbid}&api_key=${Config.API_KEY}&format=json`,
  );

  const newTopAlbums = topAlbums?.data?.topalbums?.album;
  const newTopTracks = topTracks?.data?.toptracks?.track;

  const RenderAlbumsAndTracks = ({item}) => <ProductCard product={item} />;

  if (topAlbums.loading || topTracks.loading) {
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
        <View style={styles.artist_card}>
          <Image
            style={styles.artist_image}
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
          />
          <Text style={styles.artist_text}>{name}</Text>
        </View>
      </View>
      <View style={theme ? styles.inner_containerdark : styles.inner_container}>
        <View style={styles.albums_container}>
          <Text style={theme ? styles.text_dark : styles.text}>Top Albums</Text>
          <FlatList
            renderItem={RenderAlbumsAndTracks}
            data={newTopAlbums}
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
            data={newTopTracks}
            style={styles.track_container}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailPage;
