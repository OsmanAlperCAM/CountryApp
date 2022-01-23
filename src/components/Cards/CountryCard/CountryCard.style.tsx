import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  image: {
    width: 70,
    height: 50,
  },
  name: {
    margin: 10,
    fontSize:20,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'black',
  },
});
