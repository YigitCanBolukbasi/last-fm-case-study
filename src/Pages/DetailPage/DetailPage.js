import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import React from 'react';

import styles from './DetailPage.styles';
import useFetch from '../../Hooks/useFetch/useFetch';
import ProductCard from '../../Components/Cards/ProductCard/ProductCard';

const DetailPage = ({route}) => {
  const {mbid, name} = route.params;
  console.log(name);

  const topAlbums = useFetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${mbid}&api_key=fbdc2241acfbf4beaf00ddfe17d1e927&format=json`,
  );

  const topTracks = useFetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${mbid}&api_key=fbdc2241acfbf4beaf00ddfe17d1e927&format=json`,
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
    <View style={styles.container}>
      <View style={styles.albums_container}>
        <Text style={styles.text}>Top Albums</Text>
        <FlatList
          renderItem={RenderAlbumsAndTracks}
          data={newTopAlbums}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>
      <View>
        <Text style={styles.text}>Top Tracks</Text>
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
  );
};

export default DetailPage;
