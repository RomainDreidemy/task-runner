import React from "react";
import MapView, {Marker} from "react-native-maps";

const Map = ({user_id, lat, lng, title}) => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
              latitude: +lat,
              longitude: +lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            zoomEnabled={true}
            maxZoomLevel={3}
        >
            <Marker coordinate={{latitude: +lat, longitude: +lng}}
                    title={title} key={user_id}
            />
        </MapView>
    )
}

const styles = {
    homeMap: {
        flex: 1,
        backgroundColor: "blue",
        width: '100%'
    },

    homeMapHeadline: {
        fontSize:25,
        fontWeight:'bold',
        paddingTop:30,
        paddingBottom:20,
    },

    map: {
        height: 250
    }
}

export default Map;
