public class FetchCon {
    
    private static final String CORESUBCATEGORY   = 'Solutions Marketplace';
    private static final String PRMAPPROVALTYPENM = 'Manual';
    
    /**   
    @AuraEnabled
    public static Contact searchContactByEmail (String email) {       
        return [select id, Name, Email, Phone, AccountId, Account.Name from contact where Email =: email Limit 1];
    }
    
    @AuraEnabled
    public static List<WrapEntitlement> listOfEntitlements (Contact contact) {
        
        String intelAccountId         = contact.AccountId;
        Set<Id> partnerBenfits        = new Set<Id>();
        Set<Id> entIds                = new Set<Id>();
        List<WrapEntitlement> wrpaEnt = new List<WrapEntitlement>();


        Core_Account_Group_Member__c emptyPartnerId        = new Core_Account_Group_Member__c();
        
        
        Core_Account_Group_Member__c onePartnerIdGrpMember = [SELECT Id, Core_Partner_Account_Id__c
                                                                    FROM Core_Account_Group_Member__c
                                                                    WHERE Core_Intel_Account_Id__c =: intelAccountId ];
        
        if(onePartnerIdGrpMember == emptyPartnerId) return null;
        
        
        for(PRM_AccountBenefitAssociation__c accountBenefit : [SELECT PRM_Account_Id__c,PRM_Partner_Benefit_Id__c 
                                                               FROM PRM_AccountBenefitAssociation__c 
                                                               WHERE PRM_Account_Id__c =: onePartnerIdGrpMember.Core_Partner_Account_Id__c ]) {
            partnerBenfits.add(accountBenefit.PRM_Partner_Benefit_Id__c);
        }
        
        if(partnerBenfits.isEmpty()) return null;
        
        
        for(PRM_VXEnttlmntMatrix__c eachMatrix : [SELECT PRM_Entitlement_Id__c 
                                                 FROM PRM_VXEnttlmntMatrix__c 
                                                 WHERE PRM_Approval_Type_Nm__c =: PRMAPPROVALTYPENM 
                                                 AND PRM_Partner_Benefit_Id__c IN: partnerBenfits ]) {
            entIds.add(eachMatrix.PRM_Entitlement_Id__c);
        }
        
        if(entIds.isEmpty()) return null;
        
        for(Core_Entitlement__c eachEntitlement : [SELECT Core_Display_Name__c,Id 
                                                  FROM Core_Entitlement__c 
                                                  WHERE Id IN: entIds 
                                                  OR 
                                                  Core_Sub_Category__c =: CORESUBCATEGORY ]) {
            WrapEntitlement wrapper = new WrapEntitlement(eachEntitlement);
            wrpaEnt.add(wrapper);
        }
        
        return wrpaEnt;
    }
    
    
    public class WrapEntitlement {
        
        @AuraEnabled
        public Core_Entitlement__c entitlement {get; set;}
        @AuraEnabled
        public Boolean isSelected {get; set;}
        
        public WrapEntitlement (Core_Entitlement__c ent) {
            entitlement = ent;
            isSelected  = false;
        }
    }
    **/
}