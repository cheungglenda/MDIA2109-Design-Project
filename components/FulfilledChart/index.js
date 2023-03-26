import { useState, useEffect } from "react"
import styles from "./FulfilledChart.module.css"

import { Line } from 'react-chartjs-2'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function FulfilledChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["January", "February", "March"],
            datasets: [
                {
                    label: "Requests Fulfilled", 
                    data: [194, 301, 308, 241, 261, 337, 364, 336, 277, 146, 310, 172],
                    borderColor: 'rgba(108, 145, 194)',
                    backgroundColor: 'rgba(108, 145, 194)'
                },
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: false
                }
            },
            maintainAspectRatio: false,
            responsive:true
        })

    }, []) 

    return(
        <>
        <div className={styles.container}>
            <Line data={chartData} options={chartOptions} />
        </div>
        </>
    )}