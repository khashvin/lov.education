import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import PromiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';


export default createStore(rootReducer, applyMiddleware(
    ReduxThunk,
    PromiseMiddleware,
));