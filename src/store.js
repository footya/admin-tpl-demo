import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux';
import homeReducers from './home/reducer.js';
import {
	logger
} from 'redux-logger';
console.log(homeReducers);
const reducers = combineReducers({
	home: homeReducers
});
console.log(reducers);
const middlewares = [logger];
export default createStore(reducers, applyMiddleware.apply(null, middlewares));