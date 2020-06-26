({
    //get Contact List from apex controller
    doInit : function(component, event, helper) {
        var pageSize = component.get("v.pageSize");
        var action = component.get("c.getContactList");
        action.setParams({
        });
        action.setCallback(this, function(result){
            var state = result.getState();
            if (component.isValid() && state === "SUCCESS"){
                component.set("v.contactList",result.getReturnValue());
                component.set("v.orgContactList",JSON.parse(JSON.stringify(result.getReturnValue()))); 
                component.set("v.totalRecords", result.getReturnValue().length);
                component.set("v.startPage", 0);  
                component.set("v.endPage", pageSize - 1);
                var PagList =[];
                
                if( result.getReturnValue().length > 0) {
                    for ( var i=0; i< pageSize; i++ ) {
                        if(result.getReturnValue().length >i) {
                            PagList.push(result.getReturnValue()[i]);    
                        }    
                    }
                    // console.log('PagList'+PagList);
                    component.set("v.PaginationListrows",PagList);
                }
            }
        });
        $A.enqueueAction(action);
    },
    
    //Select all contacts
    handleSelectedContacts: function(component, event, helper) {
        var selectedRec = component.get("v.submissionList");
        if((! $A.util.isEmpty(selectedRec)|| !$A.util.isUndefined(selectedRec)) ) {
            console.log('submissision list --- '+selectedRec.length);  
            if(selectedRec.length> 0 ) {
                var action = component.get("c.insertData");
                action.setParams({
                    "conList" : selectedRec
                });
                action.setCallback(this, function(result){
                    var state = result.getState();
                    console.log('state success' +state);
                    if ( state === "SUCCESS"){
                        
                        console.log('response-- '+result.getReturnValue() );
                        if( result.getReturnValue() == 'Yes') {
                            console.log('done success');
                            
                            component.set("v.valueChanged",false);
                            $A.get('e.force:refreshView').fire();
                            console.log('fired success');
                            
                        }
                        else {
                            
                        }
                    }
                });
                $A.enqueueAction(action);
                
            }
            
        }
        
    },
    
    next: function (component, event, helper) {
        //debugger;
        var selectedVal = component.get("v.contactList");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var PagList = [];
        var counter = 0;
        for ( var i = end + 1; i < end + pageSize + 1; i++ ) {
            console.log(selectedVal.length);
            if ( selectedVal.length > i ) {
                PagList.push(selectedVal[i]);
            }
            counter ++ ;
        }
        start = start + counter;
        end = end + counter;
        component.set("v.startPage", start);
        component.set("v.endPage", end);
        component.set('v.PaginationListrows', PagList);
    },
    
    previous: function (component, event, helper) {
        var selectedVal = component.get("v.contactList");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var PagList = [];
        var counter = 0;
        for ( var i= start-pageSize; i < start ; i++ ) {
            if ( i > -1 ) {
                PagList.push(selectedVal[i]);
                counter ++;
            } else {
                start++;
            }
        }
        start = start - counter;
        end = end - counter;
        component.set("v.startPage", start);
        component.set("v.endPage", end);
        component.set('v.PaginationListrows', PagList);
    },
    testing: function (component, event, helper) {
        /*
        var tempSelectedContacts =[];
        var paginationListrows = component.get("v.PaginationListrows");
        var res = event.getSource().get("v.text").split(',');
        var index = res[1];
        var submissionList = component.get("v.submissionList");
        
      //  if(submissionList[index][Invoice_Email__c])
        
        submissionList.push(paginationListrows[index]);
       // console.log('submissision ist'+JSON.stringify(submissionList));
        component.set("v.submissionList",submissionList);
        */
        
        
        
        component.set("v.valueChanged",false);
        var contactList1 = component.get("v.contactList");
        var contactList2 = component.get("v.orgContactList");
        //  console.log('org list -->'+ JSON.stringify(contactList2));
        // console.log('new list --> '+JSON.stringify(contactList1));
        
        //var obj = (contactList1 === contactList2) ? true :false;
        // console.log('contactList bool-->'+obj);
        // 
        console.log('org list length-->'+ contactList2.length);
        console.log('new list length--> '+contactList1.length);
        component.set("v.submissionList",null);
        var submissionList = [];
        
        for(var i=0; i < contactList2.length; i++) {
            for(var j=0; j < contactList1.length; j++) {
                if(JSON.stringify(contactList2[i].Id)  == JSON.stringify(contactList1[j].Id)) {                          
                    if(JSON.stringify(contactList2[i].Invoice_Email__c)  != JSON.stringify(contactList1[j].Invoice_Email__c)) {
                        component.set("v.valueChanged",true);
                        submissionList.push(contactList1[i]);
                        
                        // break;
                    }
                    
                }
            }
        }
        console.log('submissision ist'+submissionList.length);  
        component.set("v.submissionList",submissionList);
        
        
        
    }
})