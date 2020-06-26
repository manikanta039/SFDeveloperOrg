({
    
    doSomething : function(component, event, helper) {
        helper.doSomething(component, event, helper);

    },
    
    doInit : function(component, event, helper) {
      
        helper.doSomething(component, event, helper);
        
        var action = component.get("c.getMonthData");
        action.setCallback(this,function(response) {
            var state = response.getState();           
            if (component.isValid() && state ==="SUCCESS") {
                //alert(JSON.parse(response.getReturnValue()));
                component.set("v.month",JSON.parse(response.getReturnValue()));
                
            }
            
        });
        
        $A.enqueueAction(action);
    }
})