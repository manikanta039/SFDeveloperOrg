public class ParkLocator {
    public static String[] country(String countryName){
        ParkService.ParksImplPort Locator = new ParkService.ParksImplPort();
        return Locator.byCountry(countryName);
    }
}