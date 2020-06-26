({
	hidebutton : function(component, event, helper) {
		var domel=component.find("getbutton");
        //alert(domel);
        //$A.util.addClass(domel,'slds-hide');
        $A.util.toggleClass(domel,'slds-hidden');
	},
    
    onStudentClick : function(component,event,helper) {
       //alert(component.get('v.Student').Name);
        //this.hidebutton(component,event,helper);
        var call = component.get('c.hidebutton');
        var compEvent = component.getEvent("onStudentSelected");
        compEvent.setParams( {
                "contactId" : component.get('v.Student').Id
            });
        compEvent.fire();
        $A.enqueueAction(call);
    },
})