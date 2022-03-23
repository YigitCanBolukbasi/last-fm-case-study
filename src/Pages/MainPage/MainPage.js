import {View, Text, FlatList, ActivityIndicator, Switch} from 'react-native';
import React, {useState} from 'react';

import styles from './MainPage.styles';
import ArtistCard from '../../Components/Cards/ArtistCard/ArtistCard';
import useFetch from '../../Hooks/useFetch/useFetch';
import {useContext} from 'react';
import ThemeContext from '../../Contexts/ThemeContext';
import Config from 'react-native-config';

const MainPage = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {theme, setTheme} = useContext(ThemeContext);
  const {data, isLoading, error} = useFetch(
    ['topArtist', currentPage],
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${Config.API_KEY}&format=json&limit=20&page=${currentPage}`,
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

  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    );
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

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
        extraData={data?.artists?.artist}
        renderItem={renderArtist}
        keyExtractor={(item, index) => {
          return item.listeners.toString();
        }}
        contentContainerStyle={{
          padding: 20,
        }}
        ListEmptyComponent={<Text>This list is empty</Text>}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default MainPage;
