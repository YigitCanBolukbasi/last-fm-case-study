import {View, Text, FlatList, ActivityIndicator, Switch} from 'react-native';
import React from 'react';

import styles from './MainPage.styles';
import ArtistCard from '../../Components/Cards/ArtistCard/ArtistCard';
import useFetch from '../../Hooks/useFetch/useFetch';
import {useContext} from 'react';
import ThemeContext from '../../Contexts/ThemeContext';

const MainPage = ({navigation}) => {
  // throw new Error('opps!');
  const {theme, setTheme} = useContext(ThemeContext);
  const {data, isLoading, error} = useFetch(
    'topArtist',
    'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=fbdc2241acfbf4beaf00ddfe17d1e927&format=json',
  );

  const toggleSwitch = () => setTheme(previousState => !previousState);

  const handleArtistSelect = (mbid, name, image) => {
    navigation.navigate('DetailScreen', {mbid, name, image});
  };

  const renderArtist = ({item}) => (
    <ArtistCard
      artist={item}
      onSelect={() => handleArtistSelect(item.mbid, item.name, item.image)}
    />
  );
  if (isLoading) {
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
        data={data?.artists?.artist}
        renderItem={renderArtist}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        contentContainerStyle={{
          padding: 20,
        }}
        ListEmptyComponent={<Text>This list is empty</Text>}
      />
    </View>
  );
};

export default MainPage;
