import axios from 'axios'
import { NEWS_API_KEY } from '../../secrets'

//ACTIONS
const GET_NEWS = 'GET_NEWS'


//ACTION CREATORS
export const _getNews = (news) => {
  return {
    type: GET_NEWS,
    news
  }
}

//THUNKS
export const getNews = (stockSymbol) => {
  try {
    return async(dispatch) => {
        const { data } = (await axios.get(`http://newsapi.org/v2/everything?q=${stockSymbol}&from=2020-11-11&to=2020-11-11&sortBy=popularity&apiKey=${NEWS_API_KEY}`))
        dispatch(_getNews(data.articles))
      }
  }
  catch (error) {
      console.error(error)
  }
}


//REDUCER
export default function newsReducer(state = [], action) {
  switch (action.type) {
    case GET_NEWS:
      return action.news
    default:
      return state
  }
}