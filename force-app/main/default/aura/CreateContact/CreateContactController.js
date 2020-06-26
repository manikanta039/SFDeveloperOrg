({
	createContacts : function(component, event, helper) {
        alert(component.get("v.recordId"));
        var action = component.get("c.createContact");
        action.setParams({
            con : component.get("v.newContact"),
            AccountId : component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            alert('contact created'+response.getReturnValue());
        }, 'ALL');
		//alert('create contact');
		$A.enqueueAction(action);
	}
})