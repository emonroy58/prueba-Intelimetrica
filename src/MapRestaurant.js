import React, {useState, Component} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import restData from './data/data_melp.json';
import geoDist from 'geodist';
import SearcRest from './dataRest';
import './App.css';


var marker =[];
var markerRest = restData;
var ranking ;
function Map(){

    const [selectedRest, setSelectedRest] = useState(null);
    return (
            <GoogleMap 
                    defaultZoom={16}
                    defaultCenter={{lat:19.432608, lng:-99.133209}}
             >
                {markerRest.map( data =>(
                    <Marker key={data.id} 
                            position= {{
                                lat: data.address.location.lat, 
                                lng: data.address.location.lng}}
                     onClick={()=>{
                        
                         marker=[];
                         setSelectedRest(data);

                        //Calcula la distancia entre dos puntos                      
                            for (let i in markerRest){
                                /*console.log({lat: data.address.location.lat})
                                console.log({lat: restData[i].address.location.lat})

                                console.log({lng: data.address.location.lng})
                                console.log({lng: restData[i].address.location.lng})*/
                               const  dist = geoDist({lat: data.address.location.lat, lng: data.address.location.lng}, {lat: restData[i].address.location.lat, lng: restData[i].address.location.lng},{exact: true, unit: 'km'})
                               const distfin = dist*100;
                                    if(dist<=80){
                                        console.log(distfin)
                                         marker.push(restData[i])     
                                    }                                  
                            } 
                            console.log(marker)
                            markerRest = marker; 
                           
                             ranking= marker.length;                             
   
                     }}

                        icon={{
                         url: '/image.png',
                         scaledSize: new window.google.maps.Size(35, 35)
                     }}         

                     
                                            
                    />  //fin Marker 

                ))}

                

                {selectedRest && (
                    <InfoWindow  
                         position= {{
                                lat: selectedRest.address.location.lat, 
                                lng: selectedRest.address.location.lng
                                }}

                        onCloseClick = {()=>{
                            setSelectedRest(null);                                                        
                        }}                          
                    >
                           
                        <div>
                           <h4>Coincidencia con radio de 80km: {ranking} lugares</h4>
                           <h5>Nombre: {selectedRest.name}</h5>
                            <p>Calle: {selectedRest.address.street}, Estado: {selectedRest.address.state}</p>
                            <p>Ranking: {selectedRest.rating}</p>
                        </div>

                                 
                    </InfoWindow>
                    
                )} 

               
             </GoogleMap>

        );
    }

 const WrappedMap = withScriptjs(withGoogleMap(Map));

class MapRestaurant extends Component{
    constructor(props){
        super(props);
        this.state ={
            search:''
        }
    }   

  
  render(){   
  
    const API_KEY = "AIzaSyB7LBpgToPhN-yxej7rkgL22zKVdBjlyDE";
    return(
      <div>
        <div id = 'sidebar'>
            <SearcRest />
        </div>
                       
        <div id= "map">
            <WrappedMap 
            
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
                loadingElement= {<div style={{ height:"100%" }} />}
                containerElement = {<div style={{ height:"100%" }} />}
                mapElement = {<div style={{ height:"100%" }} />} 
            />

        </div>
      </div>   
      
    );
  }
   } 

   export default MapRestaurant;
