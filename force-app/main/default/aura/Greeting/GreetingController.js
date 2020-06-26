({
 init : function(component, event, helper) {
  
    
        //get the field name
        var field = component.get('v.objectField');
        
        //use the key to lookup value returned in LDS
        var value = component.get('v.simpleRecord.'+field);
        
        //set the value to and attribute to be used in your component
       component.set('v.passThroughValue', value);
            
   
        
 }
})