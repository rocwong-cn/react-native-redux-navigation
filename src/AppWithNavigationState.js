/**
 * Created by Roc on 2017/7/4.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Routers from './routers';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");
class AppWithNavigationState extends Component {
    render() {
        const { dispatch, nav } = this.props;
        return (
            <Routers navigation={addNavigationHelpers({
                dispatch: dispatch,
                state: nav,
                addListener
            })}
            />
        );
    }
}

export default connect(state => ({ nav: state.nav }))(AppWithNavigationState);