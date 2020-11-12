import axios from 'axios'
import STOCKS_API_KEY from '../../secrets'

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
        let ticker
        
        if (stockSymbol !== '') {
          ticker = (await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockSymbol}&apikey=${STOCKS_API_KEY}`)).data.bestMatches[0]['1. symbol']
        }

        if (ticker) {
          const { data } = (await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${STOCKS_API_KEY}`))
          dispatch(_getStocks(data))
        }
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