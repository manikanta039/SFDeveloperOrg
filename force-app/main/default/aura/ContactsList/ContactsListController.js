({
	doInit : function(component, event, helper) {
        var action = component.get("c.fetchContacts");
        action.setParams({
            AccountId : component.get("v.recordId")
        })
        action.setCallback(this, function(response) {
            //alert(response.getReturnValue());
            component.set("v.contacts", response.getReturnValue());
        }, 'ALL');
	$A.enqueueAction(action);		
	},
    
    goToContact : function(component, event, helper) {
        var contactid = event.getSource().get("v.name");
        //alert(contactid);
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": contactid,
          "slideDevName": "chatter"
        });
        navEvt.fire();
    },
    
    editContact : function(component, event, helper) {
        var contactid = event.getSource().get("v.name");
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
             "recordId": contactid
       	});
        editRecordEvent.fire();
    }
})