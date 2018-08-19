import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

export const rootReducer = combineReducers({
    weather: WeatherReducer
});