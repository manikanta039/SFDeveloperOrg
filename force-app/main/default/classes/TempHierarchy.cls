public class TempHierarchy {
    public List<Place__c> placesCountry{get;set;}
    public List<Place__c> placesStates{get;set;}
    public List<Place__c> placesDist{get;set;}
    public List<Place__c> placesCity{get;set;}
    public Place__c place{get;set;}    
    
    public TempHierarchy(){
        placesCountry = new List<Place__c>();
        placesStates = new List<Place__c>();
        placesDist = new List<Place__c>();
        placesCity = new List<Place__c>();
        
    }
    public List<Place__c> gethierarchy() {
        placesCountry = [select ID, Name from Place__c where Name = 'India'];
        system.debug(placesCountry);
        
        for(Integer i = 0; i < placesCountry.size(); i++){
			placesStates = [select ID, Name from Place__c where Level__c = 'State' and Country__r.Name =: placesCountry[i].Name];
            
            for(Integer j = 0; j < placesStates.size(); j++ ){
                placesDist = [select ID, Name from Place__c where Level__c = 'District' and State__r.Name  =: placesStates[j].Name and Country__r.Name =:placesCountry[i].Name];
                
                for(Integer k = 0; k < placesDist.size(); k++){
                    placesCity = [select ID, Name from Place__c where Level__c = 'City' and State__r.Name  =: placesStates[j].Name and Country__r.Name =:placesCountry[i].Name and District__r.Name =: placesDist[k].Name ];
                    return placesCity;
                }
                //return placesDist;
            }
            //return placesStates;
        }
        return placesCountry;
    }
   /* public Place__c getCountry(){
        placesCountry = [select ID, Name from Place__c where Name = 'India'];
        return placesCountry;
    }
    
    public list<Place__c> getstate(Place__c placesCountry){
        placesStates = [select ID, Name from Place__c where Level__c = 'State' and Country__r.Name =: placesCountry.Name];
        for(Integer i = 0; i< placesStates.size(), i++){
            
        }
        return placesState;
    }
    */
}