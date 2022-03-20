import {View, Text, FlatList, ActivityIndicator, Switch} from 'react-native';
import React from 'react';

import styles from './MainPage.styles';
import ArtistCard from '../../Components/Cards/ArtistCard/ArtistCard';
import useFetch from '../../Hooks/useFetch/useFetch';
import Config from 'react-native-config';
import {useContext} from 'react';
import ThemeContext from '../../Contexts/ThemeContext';

const MainPage = ({navigation}) => {
  const {theme, setTheme} = useContext(ThemeContext);
  const toggleSwitch = () => setTheme(previousState => !previousState);
  const {data, loading, error} = useFetch(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${Config.API_KEY}&format=json`,
  );

  const newData = data?.artists?.artist;

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
    <View style={theme ? styles.container_dark : styles.container}>
      <View style={styles.inner_container}>
        <Text style={theme ? styles.text_dark : styles.text}>
          Dark Mode : {theme ? 'On' : 'Off'}
        </Text>
      </View>
      <Switch
        trackColor={{false: '#767577', true: 'white'}}
        thumbColor={theme ? 'gray' : 'black'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme}
      />
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
