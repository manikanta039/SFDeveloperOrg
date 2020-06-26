({
	setRec : function(component, event, helper) {
        var params = event.getParam("recId");
        component.set("v.recId",params);
		
	},
    
    callAction : function(component, event, helper) {
        var str = 'mani';
        var params = event.getParam('arguments');
        if(params)
        component.set("v.param1",params.recordsId);
    }
})