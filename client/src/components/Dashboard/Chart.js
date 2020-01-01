import React from 'react'
import Chart from 'chart.js';

const ChartDisplay = () => {
    const [state, setstate] = useState({
        type: ''
    });

    useEffect(() => {
        return () => {
            setstate({
                ...state,
                type: new ChartDisplay()
            })
        };
    }, []);
    return <canvas onLoad="" />
}

export default ChartDisplay
