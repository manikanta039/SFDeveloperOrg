({
    
    generateChart : function(component, event, helper, category, amount,  category1, amount1) {
        //   alert('inside generateChart');
        var chartobj = component.get("v.chartobj");
        var chartdata = {
            labels: category,
            datasets: [
                {
                    label: 'Date_Amount',
                    data: amount ,
                    fill: false,
                    pointBackgroundColor: "",
                    pointBorderWidth: 4,
                    pointHoverRadius: 5,
                    responsive: true,
                    pointRadius: 3,
                    bezierCurve: true,
                    pointHitRadius: 10,
                    borderColor: "#FF6384",
                    
                },
                {
                    label: 'Date_Amount',
                    data: amount1 ,
                    fill: false,
                    pointBackgroundColor: "",
                    pointBorderWidth: 4,
                    pointHoverRadius: 5,
                    responsive: true,
                    pointRadius: 3,
                    bezierCurve: true,
                    pointHitRadius: 10,
                    borderColor: "#9966FF",
                    
                }
                
            ]
        }  
        
        var ctx = component.find("piechart").getElement();
        if(chartobj){
            chartobj.destroy();
        }
        
        chartobj = new Chart(ctx ,{ 
            type: 'line',
            data: chartdata,
            options: {	
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    padding: 10,
                    display: false,
                },
                responsive: true
            }
        });
        //store the chart in the attribute
        component.set("v.chartobj",chartobj);   
       
    },
    doSomething : function(component, event, helper) {
        
        var category = [];
        var amount = [];
        var dat = [];
        var amt = [];
        var category1 = [];
        var amount1 = [];
        var selectedOption = component.get("v.selectedMonth");
        var selectedOption1 = component.get("v.selectedMonth1");
        
        //alert('selectedOption: '+selectedOption);
        //alert('selectedOption1: '+selectedOption1);
        
        var action = component.get("c.getChartData1");
        action.setParams({
            "month":selectedOption
        });
        
        var action1 = component.get("c.getChartData2");
        action1.setParams({
            "month1":selectedOption1
        });
        
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var obj = JSON.parse(response.getReturnValue());
                //debugger;
               /* obj.sort(function compare(a,b) {
                    if (a.category < b.category)
                        return -1;
                    if (a.category > b.category)
                        return 1;
                    return 0;
                });*/
               
                for (var i = 0; i < Object.keys(obj).length; i++) {
                    category.push(obj[i].category);
                    amount.push(obj[i].amount);
                }
                var k,j;
                var value;
               /*	var categoryAmountMap = new Map();
                categoryAmountMap.set(category,amount);
                alert('categoryAmountMap = '+categoryAmountMap);
                
                var mapSize = categoryAmountMap.size;
                for(var i=0;i<mapSize;i++)
                {
                    alert('ABC '+categoryAmountMap.get(category[i]));
                }
                /*for(var j = 0; j < 31; j++)
                {
                    k=(j+1);
                    //alert('K= '+k +' and '+' Cat= '+category[j]);
                    if(k == category[j])
                    {
                        dat.push(k);
                        amt.push(amount[j]);
                        //alert('Amount= '+amt);
                    }
                    else
                    {
                        dat.push(k);
                        amt.push(0);
                        k++;
                        //alert('Amount Else= '+amt);
                    }
                    //alert(k + ' and '+ amt[j]);

                }*/
                //alert('dat '+dat);
                //alert('category '+category);
                //alert('amt '+amt);                
                helper.generateChart(component, event, helper, category, amount, category1, amount1);
            }
            
        });
        
        action1.setCallback(this,function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
             
                var obj = JSON.parse(response.getReturnValue());
                //debugger;
                /*obj.sort(function compare(a,b) {
                    if (a.category1 < b.category1)
                        return -1;
                    if (a.category1 > b.category1)
                        return 1;
                    return 0;
                });*/
                for (var i = 0; i < Object.keys(obj).length; i++) {
                    category1.push(obj[i].category);
                    amount1.push(obj[i].amount);
                }
                //alert('category1  '+category1);
                helper.generateChart(component, event, helper, category, amount, category1, amount1);
            }
            
        });
        $A.enqueueAction(action);
        $A.enqueueAction(action1);
    }
    
})