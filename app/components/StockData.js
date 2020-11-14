import React from 'react'
import { connect } from 'react-redux'
import { getStocks} from '../redux/stockData'
import { getNews } from '../redux/newsData'
import StockChart from './Chart'
import NewsCard from './NewsCard'



class StockData extends React.Component {
  constructor() {
    super(),
    this.state = {
      search: '',
      stockSymbol: '',
      dataPoint: [],
      newsArticles: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getStocks(this.state.stockSymbol)
    this.props.getNews(this.state.stockSymbol)
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      const timeSeries = this.props.stocks.stocks["Time Series (5min)"]
      const matrix = [];
      for(const key in timeSeries) {
        const time = timeSeries[key];
        const timePoint = key
        const openPrice = time['1. open']*1;
        const closePrice = time['4. close']*1;
        const highPrice = time['2. high']*1;
        const lowPrice = time['3. low']*1;
        matrix.unshift([ this.modifyDate(timePoint), lowPrice, openPrice, closePrice, highPrice ]);
      }
      matrix.unshift(['0', 'Opening Price', 'b', 'c', 'd'])
      this.setState({ 
        dataPoint: matrix, 
        newsArticles: this.props.stocks.news
      })
    }
  }

  handleChange(event){
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({
      stockSymbol: this.state.search
    })
    this.props.getStocks(this.state.search)
    this.props.getNews(this.state.search)
  }

  modifyDate(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes === 0) minutes = '00'
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;

    return `${hours}:${minutes} ${ampm}`
  }

  render() {
    const { search, stockSymbol, dataPoint, newsArticles } = this.state
    return (
      <div className={!stockSymbol ? `page` : 'in-page'}>
        <div className='logo'>
          <h1 className='stock'>.stock</h1>
          <h1 className='board'>BOARD</h1>
      </div>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <input
              value={search}
              onChange={this.handleChange}
              className="searchbar"
              type="text"
              placeholder="Search"
            ></input>
            <button className="search-but" type="submit">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
              />
            </button>
          </form>
        </div>
        <StockChart stockSymbol={stockSymbol} stockData={dataPoint}/>
        {(newsArticles.length) 
          ? 
            <div>
              <h3 className='centertext'>Showing {newsArticles.length} articles related to "{stockSymbol}"</h3>
              <div className='news-container'>
                {newsArticles.map((article, index)=> <NewsCard key={index} newsArticle={article}/>)}
              </div> 
            </div>: null
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    stocks: state
  }
}

const mapDispatch = (dispatch) => {
  return {
    getStocks: (stockSymbol) => dispatch(getStocks(stockSymbol)),
    getNews: (stockSymbol) => dispatch(getNews(stockSymbol))
  }
}

export default connect(mapState, mapDispatch)(StockData)
