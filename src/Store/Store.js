import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from '../Reducer/index'

const initialstate = {};

const middleware = [thunk, logger];

const Store = createStore(rootreducer, initialstate, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
))

export default Store