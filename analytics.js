// Analytics page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Weekly consumption chart
    const weeklyCtx = document.getElementById('weeklyChart').getContext('2d');
    const weeklyChart = new Chart(weeklyCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Energy Consumption (kWh)',
                data: [12.5, 14.2, 11.8, 15.3, 13.7, 16.1, 14.9],
                backgroundColor: 'rgba(102, 126, 234, 0.6)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Peak usage hours chart
    const peakCtx = document.getElementById('peakHoursChart').getContext('2d');
    const peakChart = new Chart(peakCtx, {
        type: 'line',
        data: {
            labels: ['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM'],
            datasets: [{
                label: 'Average Usage (kWh)',
                data: [2.1, 3.2, 2.8, 4.1, 3.5, 5.2, 7.8, 6.3, 4.2],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Temperature Distribution
    const tempCtx = document.getElementById('temperatureDistChart').getContext('2d');
    const temperatureDistChart = new Chart(tempCtx, {
        type: 'bar',
        data: {
            labels: ["15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34"],
            datasets: [{
                label: 'Temperature Frequency',
                data: [5, 8, 12, 18, 24, 30, 25, 20, 15, 10, 8, 7, 5, 4, 3, 2, 1, 1, 1, 1],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive:true,
            scales: {
                y: {
                    beginAtZero:true
                }
            }
        }
    });

    // Humidity Distribution
    const humidityCtx = document.getElementById('humidityDistChart').getContext('2d');
    const humidityDistChart = new Chart(humidityCtx, {
        type: 'bar',
        data: {
            labels: ["20","30","40","50","60","70","80","90","100"],
            datasets: [{
                label: 'Humidity Frequency',
                data: [10, 15, 25, 35, 30, 20, 15, 10, 5],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive:true,
            scales: {
                y: {
                    beginAtZero:true
                }
            }
        }
    });

    // Average Power Usage by Device
    const powerUsageCtx = document.getElementById('powerUsageDeviceChart').getContext('2d');
    const powerUsageDeviceChart = new Chart(powerUsageCtx, {
        type: 'bar',
        data: {
            labels: ['Heater', 'Air Conditioner', 'Refrigerator', 'Light', 'TV', 'Fan'],
            datasets: [{
                label: 'Average Power Usage (W)',
                data: [150, 120, 100, 60, 50, 40],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive:true,
            scales: {
                y: {
                    beginAtZero:true
                }
            }
        }
    });

    // Latency Over Time
    const latencyCtx = document.getElementById('latencyOverTimeChart').getContext('2d');
    const latencyOverTimeChart = new Chart(latencyCtx, {
        type: 'line',
        data: {
            labels: ['12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00'],
            datasets: [{
                label: 'Latency (ms)',
                data: [20, 25, 22, 30, 28, 26, 24],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display:true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // CPU Load Distribution
    const cpuLoadCtx = document.getElementById('cpuLoadChart').getContext('2d');
    const cpuLoadChart = new Chart(cpuLoadCtx, {
        type: 'bar',
        data: {
            labels: ['0-10%', '10-20%', '20-30%', '30-40%', '40-50%', '50-60%', '60-70%', '70-80%'],
            datasets: [{
                label: 'CPU Load Frequency',
                data: [5, 15, 25, 20, 10, 8, 5, 2],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive:true,
            scales: {
                y: {
                    beginAtZero:true
                }
            }
        }
    });

    // Bandwidth Usage vs Latency (Scatter)
    const bandwidthLatencyCtx = document.getElementById('bandwidthLatencyChart').getContext('2d');
    const bandwidthLatencyChart = new Chart(bandwidthLatencyCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Bandwidth vs Latency',
                data: [
                    {x: 10, y: 25},
                    {x: 12, y: 30},
                    {x: 15, y: 28},
                    {x: 20, y: 35},
                    {x: 25, y: 40},
                    {x: 30, y: 45},
                    {x: 35, y: 50}
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }]
        },
        options: {
            responsive:true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Bandwidth Usage (MB)'
                    }
                },
                y: {
                    beginAtZero:true,
                    title: {
                        display: true,
                        text: 'Latency (ms)'
                    }
                }
            }
        }
    });

    // Correlation Heatmap (simplified as heatmap is complex in Chart.js)
    // Using a matrix of correlations with colors represented by background color intensity in a table for demo
    // Since Chart.js doesn't support heatmap out-of-the-box, we simulate with a custom approach
    
    // Correlation data (simplified, example)
    const correlationMatrix = [
        [1.0, 0.4, 0.3],
        [0.4, 1.0, 0.6],
        [0.3, 0.6, 1.0]
    ];
    const correlationLabels = ['Temperature', 'Humidity', 'Power Usage'];

    // Generate correlation heatmap using colors in a table (replace with better chart if needed)
    const heatmapCanvas = document.getElementById('correlationHeatmapChart');
    const heatmapCtx = heatmapCanvas.getContext('2d');
    heatmapCanvas.width = 400;
    heatmapCanvas.height = 400;

    const cellSize = 100;
    correlationLabels.forEach((label, i) => {
        correlationLabels.forEach((_, j) => {
            const value = correlationMatrix[i][j];
            const color = `rgba(255, 0, 0, ${value})`;
            heatmapCtx.fillStyle = color;
            heatmapCtx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
            heatmapCtx.fillStyle = 'black';
            heatmapCtx.font = '16px Arial';
            heatmapCtx.fillText(value.toFixed(2), j * cellSize + cellSize / 3, i * cellSize + cellSize / 2);
        });
    });
});
