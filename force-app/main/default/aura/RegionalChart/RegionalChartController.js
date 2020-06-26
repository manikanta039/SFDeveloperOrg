({
    generateChart : function(component, event, helper) {
        var chartData  = [];  
        var chartData1 = [];
        var chartData2 = [];
        var chartData3 = [];
        var action     = component.get("c.getChartData");
        var action1    = component.get("c.getChartData1");
        action.setCallback (this,function(response) {
            var state = response.getState();           
            if (component.isValid() && state ==="SUCCESS") {
                var obj     = JSON.parse(response.getReturnValue());
                var length1 = Object.keys(obj).length;
                //alert('length1'+obj.length);
                for (var i = 0; i < length1; i++) {
                    chartData.push(JSON.parse(response.getReturnValue())[i].expr0);
                    chartData1.push(JSON.parse(response.getReturnValue())[i].Customer_Region__c);
                }
                /*chartData.push(JSON.parse(response.getReturnValue())[0].expr0);
                chartData.push(JSON.parse(response.getReturnValue())[1].expr0);
                chartData.push(JSON.parse(response.getReturnValue())[2].expr0);
                chartData.push(JSON.parse(response.getReturnValue())[3].expr0);
                chartData1.push(JSON.parse(response.getReturnValue())[0].Customer_Region__c);
                chartData1.push(JSON.parse(response.getReturnValue())[1].Customer_Region__c);
                chartData1.push(JSON.parse(response.getReturnValue())[2].Customer_Region__c);
                chartData1.push(JSON.parse(response.getReturnValue())[3].Customer_Region__c);
                */                
                var chartdata = {
                    labels: chartData1,
                    datasets: [
                        {
                            label: 'Countries',
                            data: chartData ,
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
                        }
                        
                    ]
                }
                var ctx       = component.find("piechart").getElement();
                var lineChart = new Chart(ctx ,{ 
                    type: 'pie',
                    data: chartdata,
                    options: {	
                        legend: {
                            position: 'bottom',
                            padding: 10,
                        },
                        responsive: true
                    }
                });  
                var ctxbar    = component.find("barchart").getElement();
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
                
                var chartLine  = component.find("linechart").getElement();
                var finalChart = new Chart(chartLine,{
                    type: 'line',
                    data : chartdata,
                    options : {
                        legend : {
                            position: 'bottom',
                            padding: 10,
                        },
                        responsive: true
                    }
                });
            }
        });
        action1.setCallback(this,function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                  var obj     = JSON.parse(response.getReturnValue());
                var length1 = Object.keys(obj).length;
                //alert('length1'+obj.length);
                for (var i = 0; i < length1; i++) {
                    chartData2.push(JSON.parse(response.getReturnValue())[i].expr0);
                    chartData3.push(JSON.parse(response.getReturnValue())[i].Customer_Region__c);
                }
                //alert('chartData2'+chartData2);
                //alert('chartData3'+chartData3);
                 var chartdata = {
                    labels: chartData3,
                    datasets: [
                        {
                            label: 'Countries',
                            data: chartData2 ,
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
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(99, 162, 86, 1)'
                            ],
                            
                            borderColor: [
                                'rgba(1, 1, 1, 0)',
                                'rgba(1, 1, 1, 0)',
                                'rgba(1, 1, 1, 0)',
                                'rgba(1, 1, 1, 0)',
                                'rgba(1, 1, 1, 0)',
                                'rgba(1, 1, 1, 0)',
                                'rgba(1, 1, 1, 0)'
                            ]
                        }
                        
                    ]
                }
                  var ctx1       = component.find("piechart1").getElement();
                var lineChart = new Chart(ctx1 ,{ 
                    type: 'pie',
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
        });
        $A.enqueueAction(action);
        $A.enqueueAction(action1);
    }
})