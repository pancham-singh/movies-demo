import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
    borderRadius: 15,
    margin: 5,
  },
  thumb: {
    borderRadius: 15,
    height: 100,
    width: 100
  },
  content: {
    padding: 10,
    flexDirection:'column',
    justifyContent:'center'
  },
  name: {
    fontSize: 12,
    color: '#00b3b3',
  },
  collectionName: {
    fontSize: 12,
    color: '#cc0066'
  },
  movieName: {
    fontSize: 14,
    color: '#cc0066',
    fontWeight:'bold'
  },
  date: {
    fontSize: 12,
    color: '#000',
  }


});

export default styles
