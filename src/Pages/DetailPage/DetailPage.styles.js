import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 30,
  },
  albums_container: {
    width: Dimensions.get('window').width / 2,
    marginTop: 40,
  },
  track_container: {
    width: Dimensions.get('window').width / 2,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
