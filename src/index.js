/**
 * Created by Roc on 2017/6/30.
 */
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import AppWithNavigationState from './AppWithNavigationState';

const store = createStore();
export default class RnNavReudux extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
};

AppRegistry.registerComponent('RnNavReudx', () => RnNavReudux);