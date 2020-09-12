// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class Territory2 {
    global Id Id;
    global String Name;
    global Territory2Type Territory2Type;
    global Id Territory2TypeId;
    global Territory2Model Territory2Model;
    global Id Territory2ModelId;
    global Territory2 ParentTerritory2;
    global Id ParentTerritory2Id;
    global String Description;
    global User ForecastUser;
    global Id ForecastUserId;
    global String AccountAccessLevel;
    global String OpportunityAccessLevel;
    global String CaseAccessLevel;
    global String ContactAccessLevel;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global String DeveloperName;
    global List<AccountUserTerritory2View> AccountUserTerritory2Views;
    global List<ObjectTerritory2Association> ObjectTerritory2Associations;
    global List<RuleTerritory2Association> RuleTerritory2Associations;
    global List<UserTerritory2Association> UserTerritory2Associations;
    global List<Group> Related;
    global List<Opportunity> Territory2;
    global List<Territory2> ParentTerritory2;

    global Territory2 () 
    {
    }
}