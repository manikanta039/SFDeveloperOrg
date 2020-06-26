trigger AccountTeam on Opportunity (after insert, after update) {
   Set<String> atmSet = new Set<String>();
    
    for(AccountTeamMember atm : [select AccountId, UserId from AccountTeamMember]) {
        String key = atm.AccountId+'-'+atm.UserId;
        atmSet.add(key);
    }
    
   List<AccountTeamMember> att = new List<AccountTeamMember>();
    for(Opportunity opp : Trigger.New){
        if((opp.StageName=='Closed Won') && ((Trigger.isInsert) ||(opp.StageName <> Trigger.oldMap.get(opp.Id).StageName))){
        	if(!atmSet.contains(opp.AccountId+'-'+opp.OwnerId)) {
                AccountTeamMember atm = new AccountTeamMember(AccountId = opp.AccountId, UserId = opp.OwnerId);
        		att.add(atm); 
            }     
        }
    }
    if(!att.isEmpty()){
    insert att;
    }

}