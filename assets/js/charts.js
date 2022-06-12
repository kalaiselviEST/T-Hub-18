Chart.defaults.global.legend.display = false;
var data = {
    labels: ["February 23", "February 27", "March 03", "March 07", "March 11", "March 15", "March 19", "March 23"],
    datasets: [{
        legend: {
            display: false
        },
        borderRadius: 10,

        //backgroundColor: "rgba(255,99,132,0.2)",
        //borderColor: "rgba(255,99,132,1)",

        barPercentage: 0.5,
        barThickness: 10,
        borderRadius: 5,
        borderWidth: 0.2,
        hoverBackgroundColor: "#B1DF7C",
        //hoverBorderColor: "rgba(255,99,132,1)",
        //borderColor: '#9ED1FA', // Add custom color border (Line)
        backgroundColor: ["#ee786c", "#0f123f", "#ee786c", "#0f123f", "#ee786c", "#0f123f", "#ee786c", "#0f123f", "#ee786c", "#0f123f"],
        data: [65, 59, 20, 81, 56, 55, 40, 50, 40, 50],
    }]
};

var options = {
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            stacked: true,
            gridLines: {
                display: false,
                color: "rgba(255,99,132,0.2)"
            },
            ticks: {
                padding: 0,
                margin: 0,
                beginAtZero: true
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                padding: 0,
                margin: 0,
                beginAtZero: true
            }
        }],

    }
};

Chart.Line('chart', {
    options: options,
    data: data
});



var horizontalBarChart = new Chart(horizontalBarChartCanvas, {
    type: 'horizontalBar',
    data: {
        labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6", "Product 7", "Product 8", "Product 9", "Product 10"],
        datasets: [{
            data: [2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000],
            backgroundColor: ["rgba(240, 140, 121, 1.0)", "rgba(240, 140, 121, 1.0)", "rgba(240, 140, 121, 1.0)", "rgba(240, 140, 121, 1.0)", "rgba(240, 140, 121, 1.0)", "rgba(240, 140, 121, 1.0)", "rgba(240, 140, 121, 1.0)", "rgba(240, 140, 121, 1.0)", "rgba(240, 140, 121, 1.0)", "rgba(240, 140, 121, 1.0)"],

            barPercentage: 0.5,
            barThickness: 15,
            borderRadius: 5,
            borderWidth: 0.2,
            hoverBackgroundColor: "#B1DF7C",
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: false,
                    color: "rgba(255,99,132,0.2)"
                },
                ticks: {
                    padding: 0,
                    margin: 0,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    padding: 0,
                    margin: 0,
                    beginAtZero: true
                }
            }],

        }
    }
});