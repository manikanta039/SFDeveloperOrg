// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class Insurance_Policy_Lead__ChangeEvent {
    global Id Id;
    global String ReplayId;
    global Object ChangeEventHeader;
    global SObject Owner;
    global Id OwnerId;
    global String Name;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    /* Enter Full Name
    */
    global String Lead_Name__c;
    global String polict_type__c;
    global String Number_of_Child__c;
    global Double Age__c;
    /* Lead's Income from all the Sources
    */
    global Decimal Income__c;
    global String Medical_History__c;
    global String email__c;
    global Boolean Married__c;
    global Policy__c Policy_Suggested__c;
    global String Policy_Category__c;

    global Insurance_Policy_Lead__ChangeEvent () 
    {
    }
}