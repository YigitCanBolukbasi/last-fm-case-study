import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 2,
  },
  albums_container: {
    width: Dimensions.get('window').width / 2,
  },
  track_container: {
    width: Dimensions.get('window').width / 2,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  artist_card: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  artist_shadow: {
    height: Dimensions.get('window').height / 10,
    margin: 10,
    padding: 6,
    borderRadius: 10,
    elevation: 20,
  },
  artist_image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  artist_text: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },
});
