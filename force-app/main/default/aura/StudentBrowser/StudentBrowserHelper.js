({
  onInit: function(component, event, helper) {
    var students = [
      {
        sobjectType: "Contact",
        Name: "Vinita Bhatti",
        PhotoUrl:
          "https://vinitabhatti-dev-ed--c.ap5.content.force.com/profilephoto/7297F00000140ZG/F"
      },
        {
        sobjectType: "Contact",
        Name: "Hi Mani",
        PhotoUrl:
          "https://vinitabhatti-dev-ed--c.ap5.content.force.com/profilephoto/7297F00000140ZG/F"
      }
    ];
      var action= component.get('c.getStudents');
    action.setCallback(this, function(a){
            var state = a.getState(); // get the response state
            if(state == 'SUCCESS') {
                component.set('v.studentsList', a.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
});