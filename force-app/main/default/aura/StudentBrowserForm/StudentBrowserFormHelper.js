({
	onInit : function(component, event, helper) {
		var action = component.get('c.getInstructors');
        action.setCallback(this, function(a){
            var state = a.getState();
            if(state === "SUCCESS") {
            	component.set('v.instructors', a.getReturnValue());
            }
        })
        $A.enqueueAction(action);
	}
})