import React, { useState } from 'react'
import Chart from 'react-apexcharts';

const ChartDisplay = () => {
    const [state, setstate] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    });

    return (
        <div className="container">
            <h2>Attendance Tracker</h2>
            <div className="row">
                <div className="col-xs-12">
                    <div className="mixed-chart">
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="bar"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChartDisplay
