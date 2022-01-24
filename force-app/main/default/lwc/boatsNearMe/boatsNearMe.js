import { LightningElement, wire, api } from 'lwc';
import getBoatsByLocation from '@salesforce/apex/BoatDataService.getBoatsByLocation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const LABEL_YOU_ARE_HERE = 'You are here!';
const ICON_STANDARD_USER = 'standard:user';
const ERROR_TITLE = 'Error loading Boats Near Me';
const ERROR_VARIANT = 'error';

export default class BoatsNearMe extends LightningElement {
    @api boatTypeId;
    mapMarkers = [];
    isRendered;
    latitude;
    longitude;
    isLoading = true;

    // Controls the isRendered property
    // Calls getLocationFromBrowser()
    renderedCallback() { 
        if(!this.isRendered){
            this.isRendered = true;
            this.getLocationFromBrowser();
        }
    }

    // Add the wired method from the Apex Class
    // Name it getBoatsByLocation, and use latitude, longitude and boatTypeId
    // Handle the result and calls createMapMarkers
    @wire(getBoatsByLocation,{latitude:'$latitude', longitude:'$longitude', boatTypeId:'$boatTypeId'})
    wiredBoatsJSON({error, data}) { 
        if(data) {
        this.error = undefined;
        let boatData = data;
        this.isLoading = false
        this.createMapMarkers(boatData);
        } else if (error) {
            this.error = error;
            this.boatId = undefined;
            this.mapMarkers = [];
            this.isLoading = false;
            this.dispatchEvent(new ShowToastEvent({
                title:ERROR_TITLE,
                message:error.message,
                variant:ERROR_VARIANT,
                })
            )
        }
    }

    // Gets the location from the Browser
    // position => {latitude and longitude}
    getLocationFromBrowser() { 
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.latitude);
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
            },
            (error) => {
                this.strError = error.message;
            },
            {
                enableHighAccuracy: true,
            }
        );
    }

    // Creates the map markers
    createMapMarkers(boatData) {
        const newMarkers = JSON.parse(boatData).map(boat => {
        return {
            location: {
                Latitude: boat.Geolocation__Latitude__s,
                Longitude: boat.Geolocation__Longitude__s
            },
            title: boat.Name
            };
        });
        newMarkers.unshift({location:{
            Latitude: this.latitude,
            Longitude: this.longitude
        },icon:ICON_STANDARD_USER,title:LABEL_YOU_ARE_HERE});
        this.mapMarkers = newMarkers;
        this.isLoading = false;
    }
}