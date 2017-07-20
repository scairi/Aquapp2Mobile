import React from 'react';

import { StyleSheet, Text, View } from 'react-native';


class SplashScreen extends React.Component {

    render() {
        return (
            <View style={styles.splash}>
                <Text style={styles.welcome}>
                    aquapp 2
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1976d2'
    },
    welcome: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'Iowan Old Style',
        margin: 10,
        color: '#FFF'
    }
});

export default SplashScreen;