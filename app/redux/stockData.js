import axios from 'axios'

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
export const getStocks = () => {
  try {
    return async(dispatch) => {
        const { data } = (await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'))
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