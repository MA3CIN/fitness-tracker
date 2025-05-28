const weight1Data = [97, 94, 91];
const weight2Data = [96, 93, 90];

function displayWeightData(data, elementId) {
    const list = document.getElementById(elementId);
    list.innerHTML = '';
    data.forEach((weight, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Cycle ${index + 1}: ${weight} kg`;
        list.appendChild(listItem);
    });
}

displayWeightData(weight1Data, 'weight1-list');
displayWeightData(weight2Data, 'weight2-list');

const ctx = document.getElementById('weightChart').getContext('2d');
const weightChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: weight1Data.length}, (_, i) => `Cycle ${i + 1}`), 
        datasets: [
            {
                label: 'UNIT-01 Weight (kg)',
                data: weight1Data,
                borderColor: '#00ffff',
                backgroundColor: 'rgba(0, 255, 255, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#00ffff',
                pointBorderColor: '#00ffff',
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3, 
            },
            {
                label: 'UNIT-02 Weight (kg)',
                data: weight2Data,
                borderColor: '#ff4400',
                backgroundColor: 'rgba(255, 68, 0, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#ff4400',
                pointBorderColor: '#ff4400',
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#e0e0e0',
                    font: {
                        family: 'Share Tech Mono',
                        size: 14
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#00ffff',
                bodyColor: '#ccffff',
                borderColor: '#00ffff',
                borderWidth: 1,
                displayColors: true,
                bodyFont: {
                    family: 'Share Tech Mono'
                },
                titleFont: {
                    family: 'Orbitron'
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(0, 255, 255, 0.1)',
                    borderColor: '#00ffff'
                },
                ticks: {
                    color: '#ccffff',
                    font: {
                        family: 'Share Tech Mono'
                    }
                },
                title: {
                    display: true,
                    text: 'Measurement Cycles',
                    color: '#00ffff',
                    font: {
                        family: 'Orbitron',
                        size: 16
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 68, 0, 0.1)',
                    borderColor: '#ff4400'
                },
                ticks: {
                    color: '#ccffff',
                    font: {
                        family: 'Share Tech Mono'
                    }
                },
                title: {
                    display: true,
                    text: 'Weight (kg)',
                    color: '#ff4400',
                    font: {
                        family: 'Orbitron',
                        size: 16
                    }
                }
            }
        }
    }
});