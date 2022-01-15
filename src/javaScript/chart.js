var ctx = document.getElementById('dashboardChart').getContext('2d');

        const mnths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const dataMnthly =  [1, 26, 2, 12, 9, 1, 5, 2, 105, 301, 596, 120, 116,];

        const lastSixMnth = mnths.slice(-6);

        const lastSixData = dataMnthly.slice(-6);

        var dashboardChart = new Chart (ctx, {
            type: 'line',
            data: {
                labels: lastSixMnth,
                datasets: [{
                    label: 'Visitory statistic',
                    data: lastSixData, 
                    backgroundColor: [
                        'rgba(200, 1, 45, 0.5)',
                        'rgba(100, 200, 45, 0.5)',
                        'rgba(200, 30, 45, 0.5)',
                        'rgba(22, 1, 45, 0.5)',
                        'rgba(200, 1, 6, 0.5)',
                        'rgba(15, 1, 6, 0.5)',
                    ],
                    borderColor: [
                        'rgba(1, 1, 45, 0.5)',
                        'rgba(2, 200, 45, 0.5)',
                        'rgba(3, 30, 45, 0.5)',
                        'rgba(4, 1, 45, 0.5)',
                        'rgba(5, 1, 6, 0.5)',
                        'rgba(6, 1, 6, 0.5)',
                    ],
                    borderWidth: 1,
                    tension: 0.3,
                }]
            },
            options:{
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                }
            }
        });
