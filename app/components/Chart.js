import React from 'react'
import { Chart } from 'react-google-charts'

const StockChart = ({stockSymbol, stockData}) => {
    if (stockData.length > 1) {
        return (
            <div>
                <h2 className='centertext'>Showing Data for "{stockSymbol}"</h2>
                <div className='chart-buttons'>
                    <button className="time-but" type="submit">1 Day</button>
                    <button className="time-but" type="submit">1 Week</button>
                    <button className="time-but" type="submit">1 Month</button>
                    <button className="time-but" type="submit">6 Months</button>
                    <button className="time-but" type="submit">1 Year</button>
                    <button className="time-but" type="submit">Max</button>
                </div>
                <Chart
                    width={'100%'}
                    height={350}
                    chartType="CandlestickChart"
                    loader={<div>Loading Chart</div>}
                    data={stockData}
                    options={{
                        hAxis: { title: 'Time' },
                        vAxis: { title: 'Price ($ USD)'},
                        legend: 'none',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    } else {
        return (
            <div className='centertext'>
                <h1>Search for a company by name or symbol to see its data!</h1>
            </div>
        )
    }
}

export default StockChart