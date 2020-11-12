import axios from 'axios'
import { STOCKS_API_KEY } from '../../secrets'

//ACTIONS
const GET_STOCKS = 'GET_STOCKS'


//ACTION CREATORS
export const _getStocks = (stocks) => {
  return {
    type: GET_STOCKS,
    stocks
  }
}

//THUNKS
export const getStocks = (stockSymbol) => {
  try {
    return async(dispatch) => {
        const { data } = (await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&apikey=${STOCKS_API_KEY}`))
        dispatch(_getStocks(data))
      }
  }
  catch (error) {
      console.error(error)
  }
}


//REDUCER
export default function stocksReducer(state = {}, action) {
  switch (action.type) {
    case GET_STOCKS:
      return action.stocks
    default:
      return state
  }
}