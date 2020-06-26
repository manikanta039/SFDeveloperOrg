({
	handleClick : function(component, event, helper) {
		var email = component.find("comEmail").get("v.value");
        
        
        var action = component.get("c.searchContactByEmail");
        action.setParams({"email" : email});
        action.setCallback(this, function(response){
           var state = response.getState();
            if (state == "SUCCESS") {
                alert(JSON.stringify(response.getReturnValue()));
                
                component.set("v.contact", response.getReturnValue());
            }
            else{
                alert(response.getState());
            }
        });
        $A.enqueueAction(action);
	},
    showModal : function(component, event, helper) {
        component.set("v.showModal", !component.get("v.showModal"));
    }
})