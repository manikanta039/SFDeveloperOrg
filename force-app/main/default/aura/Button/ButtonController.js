({
	myAction : function(component, event, helper) {
        component.set('v.displayLoader', true);
        var id = component.get("v.recordId");
        component.set('v.dupRecId', id);
        window.setTimeout(
            $A.getCallback(function() {
                component.set('v.displayLoader', false);
            }), 5000);
        
        var event = $A.get("e.c:passRecId");
        //var event = component.getEvent("passRecordId");
        event.setParams({recId:id});
        event.fire();
        
        var cmp = component.find("childComponent");
        cmp.sampleMethod(id);
        var cmp = component.find("childComponent1");
        cmp.sampleMethod(id);
	},
    doInit : function(component, event, helper) {
        
    }
})