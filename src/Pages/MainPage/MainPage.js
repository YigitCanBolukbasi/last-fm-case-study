import {View, Text, FlatList} from 'react-native';
import React from 'react';

import styles from './MainPage.styles';
import ArtistCard from '../../Components/Cards/ArtistCard/ArtistCard';
import useFetch from '../../Hooks/useFetch/useFetch';

const MainPage = ({navigation}) => {
  const {data, loading, error} = useFetch(
    ' http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=fbdc2241acfbf4beaf00ddfe17d1e927&format=json',
  );

  // const newData = data.artists.artist;

  console.log('artist listesi :', data);

  const renderArtist = ({item}) => <ArtistCard artist={item} />;

  return (
    <View>
      <Text>MainPage</Text>
      <FlatList data={data.artists.artist} renderItem={renderArtist} />
    </View>
  );
};

export default MainPage;
