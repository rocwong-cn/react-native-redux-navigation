/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to react-native & react-navigation & redux
                </Text>
                <TouchableOpacity style={styles.button} onPress={this._toDetail.bind(this)}>
                    <Text style={styles.instructions}>
                        To Detail Screen
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }

    _toDetail() {
        this.props.navigation.navigate('Detail')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#fff',
    },
    button: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
});

export default connect(state => ({}), dispatch => ({}))(App);

