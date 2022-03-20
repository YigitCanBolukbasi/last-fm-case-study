import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';

import styles from './MainPage.styles';
import ArtistCard from '../../Components/Cards/ArtistCard/ArtistCard';
import useFetch from '../../Hooks/useFetch/useFetch';
import Config from 'react-native-config';

const MainPage = ({navigation}) => {
  const {data, loading, error} = useFetch(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${Config.API_KEY}&format=json`,
  );

  const newData = data?.artists?.artist;
  // console.log(newData?.[1]['image']);

  const handleArtistSelect = (mbid, name) => {
    navigation.navigate('DetailScreen', {mbid, name});
  };

  const renderArtist = ({item}) => (
    <ArtistCard
      artist={item}
      onSelect={() => handleArtistSelect(item.mbid, item.name)}
    />
  );
  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={newData}
        renderItem={renderArtist}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        contentContainerStyle={{
          padding: 20,
        }}
      />
    </View>
  );
};

export default MainPage;
