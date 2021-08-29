import {createStore, combineReducers} from 'redux';
import { Cards } from './cards';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            cards: Cards,
            leaders: Leaders
        })
    );

    return store;
}