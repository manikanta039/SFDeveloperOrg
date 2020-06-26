trigger CaseCommentz on Case (after insert,after update) {
    
    if(Trigger.isafter&&Trigger.isinsert){
        list<CaseComment> Comments = new list<CaseComment>();
        for(Case C : Trigger.new){
            CaseComment Cm = new CaseComment(CommentBody=C.Description,ParentId=C.Id);
            Comments.add(Cm);
        }
        
         Database.insert(Comments);
    }
    if(Trigger.isafter&&Trigger.isUpdate){
        
        list<CaseComment> Comments1 = new list<CaseComment>();
        Map<id,String> Caseids =new Map<id,String>();
        for(Case C : Trigger.new){
            if(C.Description!=Trigger.oldmap.get(C.Id).Description){
                
                Caseids.put(C.Id,C.Description);
            }
        }
        for(CaseComment cc : [Select id,CommentBody,ParentId from CaseComment where ParentId in:CaseIds.keySet()]){
            CaseComment Cm1 = new CaseComment();
            Cm1.CommentBody=CaseIds.get(cc.ParentId);
            Cm1.Id=cc.Id;
            Comments1.add(Cm1);
        } 
        Database.Update(Comments1);
        
    }
    
   

}