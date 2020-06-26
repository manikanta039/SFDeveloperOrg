({
	fetchAccounts : function(component, event, helper) {
        component.set("v.columns",[
            	{label: 'Account Name', fieldName: 'Name', type: 'text', sortable: true, editable: true},
                {label: 'Industry', fieldName: 'Industry', type: 'text'},
                {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
                {label: 'Website', fieldName: 'Website', type: 'url '},
            {label: 'Actions', type: 'button-icon', fixedWidth : 100,
                 typeAttributes:{ 
                    iconName:"utility:delete",
                    name:"delete"}},
            ]);
        var action = component.get("c.allAccounts");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS") {
                //alert(JSON.stringify(response.getReturnValue()));
                component.set("v.data", response.getReturnValue());
                component.set("v.TotalNumberOfRecord", response.getReturnValue().length);
                console.log('Accounts'+JSON.stringify(response.getReturnValue())); 
            }
        });
        $A.enqueueAction(action);
	},
    toastMsg : function(component, event, helper, strType, strMessage ) {  
        var showToast = $A.get("e.force:showToast");   
        showToast.setParams({              
            message : 'hello',  
            type : 'strType',  
            mode : 'sticky'            
        });
        showToast.fire();         
    },
   
})