import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, style, StatusBar, ScrollView } from "react-native"
import MapView from 'react-native-maps';

const LATITUDE = 59.923022;
const LONGITUDE = 10.739413;

class Welcome extends Component {
    constructor(props) {
        super(props)
    }

    goBack() {
        this.props.navigation.goBack()
    }

    goMap() {
        this.props.navigation.navigate('MapScreen')
    }

    render() {
        return (

            <View style={{flex: 1}}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{ latitude: LATITUDE + 0.0001, longitude: LONGITUDE - 0.0017 }}
                    />
                </MapView>
                <View >
                    <Text >Finders number</Text>
                    <Text >+47 412 69 949</Text>
                    <Text >Dalsbergstien 6A, 0220, OSLO</Text>
                </View>
                <View >
                    <TouchableOpacity  >
                        <Text >Not reunited</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text >Reuinted</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
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
    },
  });
export default Welcome
