({
	init : function(component, event, helper) {
		helper.fetchAccounts(component, event, helper);
        
	},
    handleSave : function(component, event, helper) {
        var action = component.get("c.saveAccounts");
        var draftList = event.getParam("draftValues");
        alert('draftList'+JSON.stringify(draftList)); 
        action.setParams({
            accList : draftList
        });
        action.setCallback( this, function( response ) {
        var state = response.getState();
            alert('res state'+JSON.stringify(response.getReturnValue())); 
            if ( state === "SUCCESS" ) {  
                if ( response.getReturnValue() === true ) {     
                    //helper.toastMsg(component, event, helper, 'success', 'Records Saved Successfully.' );  
                    //component.find( "acctTable" ).set("v.draftValues", null );                      
                } else {                         
                    //helper.toastMsg(component, event, helper, 'error', 'Something went wrong. Contact your system administrator.' );                        
                }                  
            } else {                    
                //helper.toastMsg(component, event, helper, 'error', 'Something went wrong. Contact your system administrator.' );                    
            } 
        });
        $A.enqueueAction(action);
    },
    
    Search : function(component, event, helper) {
        console.log('in Search'+component.get("v.searchKeyword")); 
        var action = component.get("c.searchAccounts");
        action.setParams({
            searchKey : component.get("v.searchKeyword")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if ( state === "SUCCESS" ) {
                component.set("v.data", response.getReturnValue());
                component.set("v.TotalNumberOfRecord", response.getReturnValue().length);
            }
        });
        $A.enqueueAction(action);
    },
    
    rowAction : function(component, event, helper) {
        var rowId = event.getParam('row').Id;
        var rowAction = event.getParam('action').name;
        //alert('rowAction '+rowId+' '+rowAction);
        
        var action = component.get("c.deleteAccount");
        action.setParams({
            recId: rowId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state == "SUCCESS") {
                helper.fetchAccounts(component, event, helper);
                alert("Successfully Deleted");
            }
        });
        $A.enqueueAction(action);
    }
})