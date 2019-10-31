import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'


const MapWrapped = withScriptjs(withGoogleMap(Map));

function getLocation(){
    let myLatLng = {
        lat:0,
        lng:-47.201484799999996
    };

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            myLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(myLatLng);
            return myLatLng;
        });

    }else{
        console.log("error")
        return myLatLng;
    }
}

function Map(){

    return(
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat:0, lng:0}}
        />
    )
}

export default function App(){

    return(
        <div style={{width: "100vw", height:"100vh"}}>
            <MapWrapped 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDnFEEa3OFBx4IDz393XjxBERgORHiME2U`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}