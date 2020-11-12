import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { getStocks} from '../redux/stockData'
import StockChart from './Chart'



class StockData extends React.Component {
  constructor() {
    super(),
    this.state = {
      timePoints: [],
      openPrices: [],
      highPrices: [],
      lowPrices: [],
      closePrices: [],
      volume: [],
      dataPoint: [['timepoint', 'a', 'b', 'c', 'd']]
    }
  }

  componentDidMount() {
    this.props.getStocks()
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      const timeSeries = this.props.stocks.stocks["Time Series (5min)"]
      const matrix = [['0', 'a', 'b', 'c', 'd']];
      for(const key in timeSeries) {
        const time = timeSeries[key];
        const timePoint = key
        const openPrice = time['1. open']*1;
        const closePrice = time['4. close']*1;
        const highPrice = time['2. high']*1;
        const lowPrice = time['3. low']*1;
        matrix.push([ timePoint, openPrice, closePrice, highPrice, lowPrice ]);
      }
      this.setState({ dataPoint: matrix })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>This is not working!</h1>
        <StockChart stockData={this.state.dataPoint}/>
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
    getStocks: () => dispatch(getStocks())
  }
}

export default connect(mapState, mapDispatch)(StockData)
