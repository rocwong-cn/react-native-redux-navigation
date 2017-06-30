/**
 * Created by Roc on 2017/6/30.
 */
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import createStore from './store/createStore';
import { addNavigationHelpers } from 'react-navigation';
import Routers from './routers';

@connect(state => ({
    nav: state.nav
}))
class AppWithNavigationState extends Component {
    render() {
        const { dispatch, nav } = this.props;
        return (
            <Routers navigation={addNavigationHelpers({
                dispatch: dispatch,
                state: nav
            })}
            />
        );
    }
}
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