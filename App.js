import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  MapView, {Permissions, Location } from "react-native-maps";
import { DestinationButton } from "./components/DestinationButton";
import { CurrentLocationButton } from "./components/CurrentLocationButton";
import Driver from "./components/Driver";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      region : 
      {
        latitude: 47.94834493910326, 
        longitude: 37.692353311430765,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045,
      }
    } 
    this._getLocationAsync();
  }
  _getLocationAsync = async() =>{
  //  let {status} = await Permissions.askAsync(Permissions.LOCATION);
 //   if(status !== 'granted')
  //    console.log('Permissions');

      let location = await Location._getCurrentPositionAsync({enableAccuracy:true}); 
      let region ={
        latitude: location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta:0.02,
        longtitudeDelta:0.02,
      } 
      this.setState({region:region}); 
    }
  centerMap(){
    const{  latitude,
      longitude,
      latitudeDelta,
      longtitudeDelta } = this.state.region;

    this.map.animateToRegion({
      latitude,
      longitude,
      latitudeDelta,
      longtitudeDelta,
    })
}
  render()
  {
    return (
      <View style={styles.container}> 
         <DestinationButton  />
         <CurrentLocationButton
            cb={() => {this.centerMap() } }
          />  
   
        <MapView 
          initialRegion = {this.state.region}
          showsUserLocation = {true}
          showsCompass = {true}
          rotateEnabled = {false}
          ref={(map) =>  {this.map = map}}
          style = {{flex:1,zIndex:0}}
          > 
         <Driver
          driver={{
            uid: 'null',
            location: { 
              latitude: 47.94834493910326, 
              longitude: 37.692353311430765,
            },
          }}
        /> 
        </MapView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // position: 'fixed',
  },
});