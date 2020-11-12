import { combineReducers } from 'redux'
import stocksReducer from './stockData'

const appReducer = combineReducers({
    stocks: stocksReducer
});

export default appReducer
