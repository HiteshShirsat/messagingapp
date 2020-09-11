import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';

const x=applyMiddleware(thunk)
const store=createStore(reducer,x)

export default store;