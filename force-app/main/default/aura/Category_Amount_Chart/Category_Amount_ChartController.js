({
	generateChart : function(component, event, helper) {
		var category = [];
        var amount = [];
        var action = component.get("c.getChartData");
        action.setCallback(this,function(response) {
                           var state = response.getState();           
            			   if (component.isValid() && state ==="SUCCESS") {
                		   var obj = JSON.parse(response.getReturnValue());
                		   //alert('length1'+response.getReturnValue());
                              // alert('String'+JSON.stringify(response.getReturnValue()));
                             //  alert('Parse'+JSON.parse(JSON.stringify(response.getReturnValue())));
                               for (var i = 0; i < Object.keys(obj).length; i++) {
                               		category.push(JSON.parse(response.getReturnValue())[i].Category__c);
                                    amount.push(JSON.parse(response.getReturnValue())[i].expr0);
                               }
                           }
           // alert(amount);
           // alert(category);
            var chartdata = {
                    labels: category,
                    datasets: [
                        {
                            label: 'Category_Amount',
                            data: amount ,
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
                                'rgba(125, 126, 186, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(175, 92, 12, 1)',
                                'rgba(53, 12, 25, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(99, 162, 86, 1)'
                            ],
                            
                            
                        }
                        
                    ]
                }
                var ctx = component.find("piechart").getElement();
                var lineChart = new Chart(ctx ,{ 
                    type: 'pie',
                    data: chartdata,
                    options: {	
                        maintainAspectRatio: false,
                        legend: {
                            position: 'bottom',
                            padding: 10,
                        },
                        responsive: true
                    }
                });
                           });
        $A.enqueueAction(action);
	}
})