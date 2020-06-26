public class PlaceController 
{
    public PlaceController(){}
    public class Wp1
    {
        public Place__c district{get;set;}
        public List<Place__c> cityList{get;set;}
        public Wp1(Place__c dist,List<Place__c> clist){
            this.district = dist;
            this.cityList = clist;
            
        }
    }
    
    public class Wp2
    {
        public Place__c state{get;set;}
        public List<Wp1> distCities{get;set;}
        public Wp2(Place__c st,List<Wp1> dtct){
            this.state = st;
            this.distCities = dtct;
        }
    }
    
    public class Wp3
    {
        public Place__c country{get;set;}
        public List<Wp2> wrapper2{get;set;}
        public Wp3(Place__c cnt, List<Wp2> stdt){
            this.country = cnt;
            this.wrapper2 = stdt;
            
        }
    }
    
    public List<Wp3> getMainPlace(){
        List<Place__c> countryList;
        List<Place__c> stateList;
        List<Place__c> distList;
        List<Place__c> cityList;
        
        List<Wp1> wrapper1;
        List<Wp2> wrapper2;
        List<Wp3> wrapper3;
        
        countryList = [select ID, Name from Place__c where Level__c = 'Country'];
        wrapper3 = new List<Wp3>();
        for(Place__c c : countryList)
        {
            stateList = [select Id, Name from Place__c where Country__r.Name =: c.Name and Level__c = 'State'];
            
            wrapper2 = new List<Wp2>();
            for(Place__c s : stateList)
            {
                
                distList = [select ID, Name from Place__c where State__r.Name =: s.Name and Level__c = 'District'];
                
                wrapper1 = new List<Wp1>();
                for(Place__c d : distList)
                {
                    
                    cityList = [select ID, Name from Place__c where District__r.Name =: d.Name and Level__c = 'City'];
                    Wp1 w1 = new Wp1(d,cityList);
                    wrapper1.add(w1);
                }
                Wp2 w2 = new Wp2(s,wrapper1);
                wrapper2.add(w2);
            }
            Wp3 w3 = new Wp3(c,wrapper2);
            wrapper3.add(w3);
        }
        system.debug('wrapper3:'+wrapper3);
        return wrapper3;
       
    }

}