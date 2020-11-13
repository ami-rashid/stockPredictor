import React from 'react'
import { Chart } from 'react-google-charts'

const StockChart = ({stockData}) => {
    if (stockData.length > 1) {
        return (
            <Chart
                width={'100%'}
                height={350}
                chartType="CandlestickChart"
                loader={<div>Loading Chart</div>}
                data={stockData}
                options={{
                    legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        )
    } else {
        return (
            <div>
                <h1>Search for a company by name or symbol to see data!</h1>
            </div>
        )
    }
}

export default StockChart