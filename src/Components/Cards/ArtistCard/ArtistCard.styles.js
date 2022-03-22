import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 12,
    backgroundColor: 'white',
    zIndex: 1,
    height: Dimensions.get('window').height / 6,
  },
  shadow_container: {
    borderColor: 'black',
    padding: 5,
    elevation: 20,
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: '#000',
  },
  image: {
    overflow: 'visible',
    width: 70,
    height: 70,
    borderRadius: 70,
    marginRight: 10,
    alignSelf: 'center',
  },
  body_container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  title_container: {
    flex: 1,
    margin: 5,
  },
  inner_container: {
    flex: 1,
    margin: 5,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
  },
  artist: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    margin: 10,
  },
  text: {
    fontSize: 12,
    color: 'black',
    margin: 5,
  },
  container_dark: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 12,
    backgroundColor: 'gray',
    zIndex: 1,
    height: Dimensions.get('window').height / 6,
  },
  title_dark: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    margin: 10,
  },
  artist_dark: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    margin: 10,
  },
  text_dark: {
    fontSize: 12,
    color: 'white',
    margin: 5,
  },
});
