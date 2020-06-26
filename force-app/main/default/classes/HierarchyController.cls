public class HierarchyController {
    public List<Place__c> places{get;set;}
    public Place__c place{get;set;}
    public List<FindChild> childPlaceNode;
    public List<FindChild> littlePlaceNode;
    
    public HierarchyController() {
        places = [select ID, Name from Place__c where Level__c = 'Country'];
        if(places.size()>0){
            place = places[0];
        }
    }
    
    public class FindChild{
        public Place__c parent{get;set;}
        public Place__c child{get;set;}
        public List<Place__c> littleChild{get;set;}
        public FindChild(Place__c parentCity, Place__c childCity,List<Place__c> littleChildCity){
            this.parent = parentCity;
            this.child = childCity;
            this.littleChild = littleChildCity;
        }
        public FindChild(Place__c childCity,List<Place__c> littleChildCity){
        //    this.parent = parentCity;
            this.child = childCity;
            this.littleChild = littleChildCity;
        }
        
        /*public Findchild(Place__c parentCity, List<Place__C> childCity){
            this.parent = parentCity;
        }*/
    }
     
    public List<FindChild> getmainplace(){
        childPlaceNode = new List<FindChild>();
        //littlePlaceNode = new List<FindChild>();
        List<Place__c> tempParent = [select Id, Name, Country__c from Place__c where Country__r.Name =: place.Name and Level__c = 'State'];
        for(Integer i = 0; i < tempParent.size() ; i++)
        {
            List<Place__c> tempChild = [select ID, Name from Place__c where State__r.Name =: tempParent[i].Name and Level__c = 'District'];
           // childPlaceNode.add(new FindChild(tempParent[i], tempChild));
            for(Integer j= 0; j < tempChild.size() ; j++)
            {
                List<Place__c> littleChild = [select ID, Name from Place__c where District__r.Name =: tempChild[j].Name and Level__c = 'City'];
                childPlaceNode.add(new FindChild(tempParent[i],tempChild[j], littleChild));
                
            }
            
        }
        return childPlaceNode;
    }

}