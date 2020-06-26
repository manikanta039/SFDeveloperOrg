trigger NotifactionTrigger on Complaint__c (after update) {

    for(Complaint__c cs : Trigger.New)  
    {
        // Instantiating a notification
        Messaging.PushNotification msg = 
            new Messaging.PushNotification();

        // Assembling the necessary payload parameters for Apple.
        // Apple params are: 
        // (<alert text>,<alert sound>,<badge count>,
        // <free-form data>)
        // This example doesn't use badge count or free-form data.
        // The number of notifications that haven't been acted
        // upon by the intended recipient is best calculated
        // at the time of the push. This timing helps
        // ensure accuracy across multiple target devices.
        // 
        // For Android uncomment below lines
        // 
        Map<String, Object> androidPayload = new Map<String, Object>();
        androidPayload.put('number', 1);
        androidPayload.put('name', 'test');
        
         Datetime now = Datetime.now();
        Integer offset = UserInfo.getTimezone().getOffset(now);
        Datetime local = now.addSeconds(offset/1000);
        
        User accts = [SELECT Name FROM User 
                   WHERE Id= :cs.LastModifiedById];
        
        Map<String, Object> payload = 
            Messaging.PushNotificationPayload.apple(
                'Complaint ' + cs.Id + ' status changed by ' 
                + accts.Name  + ' on ' + local, '', null, null);

        // Adding the assembled payload to the notification
        msg.setPayload(payload);

        // Getting recipient users
        String userId1 = cs.OwnerId;
        String userId2 = cs.LastModifiedById;

        // Adding recipient users to list
        Set<String> users = new Set<String>();
        users.add(userId1);
        users.add(userId2);     
        system.debug('userId1'+userId1);
        system.debug('userId2'+userId2);


        // Sending the notification to the specified app and users.
        // Here we specify the API name of the connected app.  
        msg.send('TestForNotifications', users);
    }
    
}