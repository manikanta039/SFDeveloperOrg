({
	doInit : function(component, event, helper) {
        //alert('inside dinit');
		var action = component.get("c.getAccounts");
        action.setCallback(this, function(response){
            if(response.getState = "Success") {
                alert(response.getReturnValue())
                component.set("v.accountsList",response.getReturnValue());
            }
        })
        $A.enqueueAction(action);
	}
})