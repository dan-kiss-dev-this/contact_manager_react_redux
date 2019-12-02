import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//this is is official initialState for the app aka the base state put in store
// const initialState = {};
const initialState = { contact: { contacts: [{ name: 'Rick' }] } };


const middleware = [thunk];

//as we create a store below which is is passed into the app we can call the dispatch function anywhere in the app as dispatch is a function of the redux store which is avalible though out the app
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;