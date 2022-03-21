import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    height: Dimensions.get('window').height / 9,
    zIndex: 1,
    backgroundColor: 'white',
  },
  shadow_container: {
    padding: 3,
    elevation: 10,
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: '#000',
    margin: 5,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 35,
    alignSelf: 'center',
    marginRight: 5,
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
  },
  title: {
    fontSize: 10,
    fontWeight: '700',
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 10,
    fontWeight: '700',
    color: 'black',
  },
  text: {
    fontSize: 8,
    color: 'black',
    margin: 5,
  },
});
