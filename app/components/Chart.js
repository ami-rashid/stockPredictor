import React from 'react'
import { Chart } from 'react-google-charts'

const StockChart = ({stockData}) => {
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
}

export default StockChart