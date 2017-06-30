/**
 * Created by Roc on 2017/6/14.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import logger from 'redux-logger';

// 定义中间件数组，默认包括thunk middleware
const middlewares = [thunk.withExtraArgument()];

// 只有开发环境才使用logger middleware
if (__DEV__) {
    middlewares.push(logger);
}

// 将中间件柯里化
const middleware = applyMiddleware(...middlewares);

export default (preloadedState = {}) => {
    const rootReducer = combineReducers({
        // every modules reducer should be define here
        ...reducers
    });

    return createStore(rootReducer, preloadedState, middleware)
}
