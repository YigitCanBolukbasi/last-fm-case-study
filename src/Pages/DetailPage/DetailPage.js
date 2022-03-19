import {View, Text, FlatList} from 'react-native';
import React from 'react';

import styles from './DetailPage.styles';
import useFetch from '../../Hooks/useFetch/useFetch';
import ProductCard from '../../Components/Cards/ProductCard/ProductCard';

const fetchTopAlbums = () => {
  const {data, loading, error} = useFetch(
    'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=fbdc2241acfbf4beaf00ddfe17d1e927&format=json',
  );

  return data;
};

const fetchTopTracks = () => {
  const {data, loading, error} = useFetch(
    'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=fbdc2241acfbf4beaf00ddfe17d1e927&format=json',
  );
  return data;
};

const DetailPage = () => {
  const topAlbums = fetchTopAlbums();
  const topTracks = fetchTopTracks();
  const newTopAlbums = topAlbums?.topalbums?.album;
  const newTopTracks = topTracks?.toptracks?.track;
  const RenderAlbumsAndTracks = ({item}) => <ProductCard product={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.albums_container}>
        <FlatList renderItem={RenderAlbumsAndTracks} data={newTopAlbums} />
      </View>
      <View>
        <FlatList
          renderItem={RenderAlbumsAndTracks}
          data={newTopTracks}
          style={styles.track_container}
        />
      </View>
    </View>
  );
};

export default DetailPage;
