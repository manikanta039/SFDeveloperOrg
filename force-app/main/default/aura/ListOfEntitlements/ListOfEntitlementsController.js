({
	myAction : function(component, event, helper) {
		
	},
    doInit : function(component, event, helper) {
       //alert('in doinit');
        var action = component.get("c.accounts");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state == "SUCCESS") {
                //alert(JSON.stringify(response.getReturnValue()));
                console.log('response -->'+JSON.stringify(response.getReturnValue()))
                component.set("v.wrapper", response.getReturnValue());  
            }
            else{
                alert(response.getState());
            }
        });
        $A.enqueueAction(action);
    },
})