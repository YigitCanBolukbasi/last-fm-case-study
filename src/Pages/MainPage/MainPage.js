import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';

import styles from './MainPage.styles';
import ArtistCard from '../../Components/Cards/ArtistCard/ArtistCard';
import useFetch from '../../Hooks/useFetch/useFetch';

const MainPage = ({navigation}) => {
  const {data, loading, error} = useFetch(
    'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=fbdc2241acfbf4beaf00ddfe17d1e927&format=json',
  );

  console.log(data?.artists?.artist[1].name);
  const newData = data?.artists?.artist;

  // const handleArtistSelect = id => {
  //   navigation.navigate('DetailScreen', {id});
  // };

  const renderArtist = ({item}) => <ArtistCard artist={item} />;
  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <Text>MainPage</Text>
      <FlatList data={newData} renderItem={renderArtist} />
    </View>
  );
};

export default MainPage;
