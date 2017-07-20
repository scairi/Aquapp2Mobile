import React from 'react';
import SplashScreen from './components/SlpashScreen'
let MapView = require('react-native-maps');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Aquapp2Mobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { splash: true }
  }

  componentDidMount = () => {
    setTimeout(() => { this.setState({ splash: false }) }, 1500)
  }


  render() {
    return (
      this.state.splash ?
        <SplashScreen /> :
        <View style={styles.container}>
          <MapView style={styles.map}
           region={{ latitude: 4.0000000, longitude: -72.0000000, latitudeDelta: 15, longitudeDelta: 15 }}  
            />
        </View>);

  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 0, 
    zIndex: 100
  },
});



AppRegistry.registerComponent('Aquapp2Mobile', () => Aquapp2Mobile);
