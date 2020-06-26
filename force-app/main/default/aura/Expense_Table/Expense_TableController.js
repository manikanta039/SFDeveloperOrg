({
    doInit : function(component, event, helper) {
       helper.doInithelper(component, event, helper);
    },
    
    openModel: function(component, event, helper) {
        component.set("v.isOpen", true);
    },
    
    closeModel : function(component, event, helper) {
     
        component.set("v.isOpen", false);
         
    },
    
    renderPage: function(component, event, helper) {
        helper.renderPage(component);
    },
    
    deleteRecord : function(component, event, helper) {
        var selectedRecord = event.getSource().get("v.value");
        alert('selectedRecord'+selectedRecord);
        
        var action = component.get("c.deleteExpense");
        action.setParams({
            "recId" : selectedRecord
        });
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                alert("Record Deleted");
            }
			   helper.doInithelper(component, event, helper);          
        });
        $A.enqueueAction(action);
    },
    
    openModal : function(component, event, helper) {
        component.set("v.showModal",true);
    },
    
    editRecord : function(component, event, helper) {
        component.set("v.showModal",true);
        component.set("v.editRecord",true);
        var data = event.getSource().get("v.value");
        //alert('data'+JSON.stringify(data));
        component.set("v.editExpense",data);
          //alert('data'+JSON.stringify(component.get("v.editExpense")));
        
    }
})