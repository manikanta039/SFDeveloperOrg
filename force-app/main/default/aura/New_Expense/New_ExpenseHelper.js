({
	createExpense : function(component, newExpense) {
		//alert('inside helper create');
        //alert('newExpense '+JSON.stringify(newExpense));
        var action = component.get("c.createExpenseRecord");
        action.setParams({
            "expense" : newExpense
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            //alert('state'+state);
            if(state == "SUCCESS") {
                //alert('inside response');
                component.set("v.isOpen",false);
            }
            
        });
        $A.enqueueAction(action);
	},
    
    updateExpense: function(component, updateExpense) {
        var result = JSON.stringify(updateExpense);
       // alert('result is'+result);
        var res = JSON.parse(result);
        //alert('res'+res);
       // alert('id'+typeof(res.Id));
        delete res.attributes;
       // var obj = Object.keys(res);
      //  alert('splice'+obj.splice(0,1));
        //alert('json splice '+JSON.stringify(obj));
    // alert("res final "+res);
       
        var action1 = component.get("c.updateExpense");
        action1.setParams({           
            "expenseData" :res
        });
        action1.setCallback(this,function(response) {
            var state = response.getState();
          //  alert('state'+state);
            if (component.isValid() && state === "SUCCESS") {
                alert('record updated successfully');
                component.set("v.isOpen",false);
            }
        });
        $A.enqueueAction(action1);
        
    }
})