import React from "react";
import { View, Image } from "react-native";
import MapView from "react-native-maps";

export default class Driver extends React.Component {
   /* constructor(props) {
        super(props);
    
        const driver = this.props.driver
          ? this.props.driver
          : { uid: "noDriversPassed", 
          location: { latitude: 0, longitude: 0 } 
        }
        const coordinate = new MapView.AnimatedRegion({
            longitude: driver.location.longitude,
            latitude: driver.location.latitude,
        })
    
        this.state = {
          driver: driver,
          coordinate: coordinate,
        }
      }
*/

  render() {
    return (
      <MapView.Marker.Animated
        coordinate={{
          //  longitude: driver.location.longitude,
         //   latitude: driver.location.latitude,
         latitude: 47.94834493910326, 
         longitude: 37.692353311430765,
        }}
        anchor={{ x: 0.35, y: 0.32 }} //center car.png
        ref={(marker) => {
          this.marker = marker;
        }}
        style={{ width: 30, height: 71 }}
      >
        <Image
          source={require("../assets/car.png")}
          style={{
            width: 30,
            height: 71,
          }}
        />
      </MapView.Marker.Animated>
    );
  }
}
