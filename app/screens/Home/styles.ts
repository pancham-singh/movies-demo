import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  content:{
    flex:1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 15,
    margin: 5,
    padding: 20
  },
  value: {
    fontSize: 14,
    color: '#000',
  },
  item:{
    // height: 25,
    backgroundColor: '#ddccff',
    marginVertical: 2
  }
});

export default styles;
