trigger ResourceCheck on Project_Resource_Mapping__c (before insert, before update) {
   List<Projects__c> projectList = new List<Projects__c>();
    /* //Map<id, Project_Resource_Mapping__c> PRmap = [select id, Project__c , Resource__c  from Project_Resource_Mapping__c];
    List<Project_Resource_Mapping__c> PRmap = [select id, Project__c , Resource__c  from Project_Resource_Mapping__c];
    for (Project_Resource_Mapping__c prm : trigger.new) {
       for (Project_Resource_Mapping__c prm1 : PRmap) {
           if(prm1.Project__c != prm.Project__c && prm1.Resource__c != prm.Resource__c){
                Projects__c p = new Projects__c() ;
                p.id = prm.Project__c;
                p.Resource_Assigned__c = true;
                projectList.add(p);
           } else {
               prm.addError('duplicate...');
           }
       }
    }
    
    if(!projectList.isEmpty()){
        update projectList;
    }*/
    
    Map<Id,List<Id>> projectResourceMap = new Map<Id,List<Id>>();
    for(Project_Resource_Mapping__c pr : [select Project__c , Resource__c  from Project_Resource_Mapping__c] ) {
        if(projectResourceMap.containsKey(pr.Project__c)) {
            //List<Id> res = projectResourceMap.get(pr.Project__c);
             projectResourceMap.get(pr.Project__c).add(pr.Resource__c);
            //res.add(pr.Resource__c);
           // projectResourceMap.put(pr.Project__c,res);
        } else {
            //List<Id> newRes = new List<Id>();
            //newRes.add(pr.Resource__c);
            projectResourceMap.put(pr.Project__c,new List<Id>{pr.Resource__c});
        }   
    }
    
    System.debug(projectResourceMap);

    for (Project_Resource_Mapping__c prm : trigger.new) {
        List<Id> assignedResources = new List<Id>(projectResourceMap.get(prm.Project__c));
        if(assignedResources.contains(prm.Resource__c)){
            prm.addError('duplicate...');
        } else {
            assignedResources.add(prm.Resource__c);
            projectResourceMap.put(prm.Project__c,assignedResources);
            Projects__c p = new Projects__c() ;
            p.id = prm.Project__c;
            p.Resource_Assigned__c = true;
            projectList.add(p);
        }    
       update projectList;
       /* List<Id> assignedResources = projectResourceMap.get(prm.Project__c);
        if(!assignedResources.contains(prm.Resource__c) ){
            Projects__c p = new Projects__c() ;
            p.id = prm.Project__c;
            p.Resource_Assigned__c = true;
            projectList.add(p);
        } else {
            prm.addError('duplicate...');
    	}*/
    }
}