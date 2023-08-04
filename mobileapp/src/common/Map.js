import MapView from 'react-native-maps';
import { StyleSheet} from "react-native";

function Map(){
    const region={
        latitude:37.78,
        longitude:-122.43,
        latitudeDelta:0.0421,
        longitudeDelta:0.0421
    };
     
    return <MapView 
    style={styles.map} 
    initialRegion={region} />;
}

export default Map;

const styles=StyleSheet.create({
    map:{
        flex:1,
    }
})


// showsUserLocation={true}
//     showsMyLocationButton={true}
//     rotateEnabled={true}
//     pitchEnabled={true}
//     zoomEnabled={true}
//     showsCompass={true}
//     followsUserLocation={true}