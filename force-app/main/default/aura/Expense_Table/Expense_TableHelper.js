({
    renderPage: function(component) {
		var records = component.get("v.expense"),
            pageNumber = component.get("v.pageNumber"),
            pageRecords = records.slice((pageNumber-1)*10, pageNumber*10);
        component.set("v.currentList", pageRecords);
	},
    doInithelper : function (component, event, helper) {
     var action = component.get("c.getExpenseData")
        action.setCallback(this,function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                component.set("v.expense",JSON.parse(response.getReturnValue()));
                component.set("v.maxPage", Math.floor((JSON.parse(response.getReturnValue()).length+9)/10));
                //alert(Math.floor((JSON.parse(response.getReturnValue()).length+9)/10));
                //alert(JSON.parse(response.getReturnValue()).length);
                //alert(response.getReturnValue());
                //alert("PARSE"+JSON.parse(response.getReturnValue()));
                //alert("STRINGFY"+JSON.stringify(response.getReturnValue()));
                this.renderPage(component);
            }
        });
        $A.enqueueAction(action);
    }
})