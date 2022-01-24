import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    padding: 8,
    backgroundColor: '#ececec',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text_container: {
    marginLeft: 8,
    flex:1
  },
  title: {
    color: 'black',
    fontSize: 22,
  },
  subtitle: {
    color: 'grey',
    fontSize: 18,
    fontStyle: 'italic',
  },
});
