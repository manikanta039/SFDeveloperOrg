({
    generateChart : function(component, event, helper) {
        var chartdata = {
            labels: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
                {
                    label:'Day',
                    data: [110, 290, 150, 250, 500, 420, 180],
                    borderColor:'rgba(62, 159, 222, 1)',
                    fill: false,
                    pointBackgroundColor: "#FFFFFF",
                    pointBorderWidth: 4,
                    pointHoverRadius: 5,
                    responsive: true,
                    pointRadius: 3,
                    bezierCurve: true,
                    pointHitRadius: 10,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 206, 86, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(153, 102, 255, 0.4)',
                        'rgba(255, 159, 64, 0.4)',
                        'rgba(99, 162, 86, 0.4)'
                    ],
                    
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(99, 162, 86, 1)'
                    ]
                },
                {
                    label:'Day',
                    data: [180, 190, 250, 180, 300, 220, 500],
                    borderColor:'rgba(156, 15, 172, 1)',
                    fill: false,
                    pointBackgroundColor: "#FFFFFF",
                    pointBorderWidth: 4,
                    pointHoverRadius: 5,
                    responsive: true,
                    pointRadius: 3,
                    bezierCurve: true,
                    pointHitRadius: 10,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 206, 86, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(153, 102, 255, 0.4)',
                        'rgba(255, 159, 64, 0.4)',
                        'rgba(99, 162, 86, 0.4)'
                    ],
                    
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(99, 162, 86, 1)'
                    ]
                }
            ]
        }
        //Get the context of the canvas element we want to select
        var ctx = component.find("piechart").getElement();
        var lineChart = new Chart(ctx ,{
            type: component.get("v.chartType"),
            data: chartdata,
            options: {	
                legend: {
                    position: 'bottom',
                    padding: 10,
                },
                responsive: true
            }
        });
        var ctxbar = component.find("barchart").getElement();
        var lineChart = new Chart(ctxbar ,{
            type: 'bar',
            data: chartdata,
            options: {	
                legend: {
                    position: 'bottom',
                    padding: 10,
                },
                responsive: true
            }
        });
        var ctxline = component.find("linechart").getElement();
        var lineChart = new Chart(ctxline ,{
            type: 'line',
            data: chartdata,
            options: {	
                legend: {
                    position: 'bottom',
                    padding: 10,
                },
                responsive: true
            }
        });

    }
})