({   
    save: function(component, event, helper) {        
        var getPlace = component.find("place").get("v.value");
        if ($A.util.isEmpty(getPlace) || $A.util.isUndefined(getPlace)|| !getPlace.trim()) {
            alert('Enter Place Field');
            return;
        }
        var getamount = component.find("amount").get("v.value");
        if ($A.util.isEmpty(getamount) || $A.util.isUndefined(getamount)) {
            alert('Enter Amount Field');
            return;
        }
        var getdate = component.find("date").get("v.value");
        if ($A.util.isEmpty(getdate) || $A.util.isUndefined(getdate)) {
            alert('Enter Date Field');
            return;
        }       
        // Create the new expense
        //alert('flag'+component.get("v.flag"));
        var newExpense = component.get("v.newExpense");
        console.log("Create expense: " + JSON.stringify(newExpense));
        helper.createExpense(component, newExpense);
        
    },
    
    closeModel : function(component, event, helper) {       
        component.set("v.newExpense",{ 'sobjectType': 'Expense__c',
                                      'Place__c': '',
                                      'Amount__c': 0,
                                      'Category__c': 'SHOPPING',
                                      'Date__c': '',
                                      'Account__c' : 'ICICI',
                                      'Expense__c': true }) ; 
        component.set("v.isOpen",false);
        component.set("v.flag",false);
        
    },
    
    update : function(component, event, helper) {
        alert('flag'+component.get("v.flag"));
        var	updateExpense = component.get("v.newExpense");
        // alert("Create expense: " + JSON.stringify(updateExpense));
        helper.updateExpense(component, updateExpense);
        
    }
})