import { combineReducers } from 'redux'
import newsReducer from './newsData'
import stocksReducer from './stockData'

const appReducer = combineReducers({
    stocks: stocksReducer,
    news: newsReducer
});

export default appReducer
