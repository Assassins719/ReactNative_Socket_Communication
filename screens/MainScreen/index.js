import React, { Component } from "react"
import { Platform, View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar, ScrollView } from "react-native"
import openSocket from 'socket.io-client';
import global from '../global';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            endpoint: 'http://192.168.3.4:80'
        };
        this.goCall = this.goCall.bind(this);
    }
    componentDidMount() {
        const { endpoint } = this.state;
        global.socket = openSocket(endpoint);
        const self = this;
        global.socket.emit("mobileConnected", 0, 0, "12345");
        global.socket.on("searchPhone", function (data) {
            self.goCall();
        });
    }
    goCall() {
        this.props.navigation.navigate('MapScreen')
    }

    render() {
        return (
            <View >
                <Text>
                    Welcome to React Native!!!
            </Text>
                <Text >
                    To get started, edit App.js
            </Text>
                <Text >
                    {instructions}
                </Text>
                <TouchableOpacity onPress={this.goCall.bind(this)}>
                    <Text >GotoMap</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Welcome
