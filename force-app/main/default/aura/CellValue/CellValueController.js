({
	doInit : function(component, event, helper) {
		var Contact = component.get('v.contact');
        var FieldName = component.get('v.colName');
        component.set("v.value",Contact[FieldName]);
	}
})