import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function CoffeeStats() {
    const [data, setData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        axios.get('/api/coffee-stats')
            .then(response => {
                const stats = response.data;
                setData({
                    labels: stats.map(item => item.country),
                    datasets: [
                        {
                            label: '咖啡店數量',
                            data: stats.map(item => item.storeCount),
                            backgroundColor: 'rgba(75,192,192,0.6)'
                        },
                        {
                            label: '咖啡出產數量',
                            data: stats.map(item => item.production),
                            backgroundColor: 'rgba(153,102,255,0.6)'
                        }
                    ]
                });
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>世界咖啡店數量與咖啡出產數量</h2>
            <Bar data={data} />
        </div>
    );
}

export default CoffeeStats; 