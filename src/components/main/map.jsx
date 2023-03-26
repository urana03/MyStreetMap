import React from 'react';
import './map.css';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import { getAPI, postAPI, reverseGeoCoding } from '../../dataservice/dataservice';

function LocationMarker(props) {
    // const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click(e) {
        processLocation(e);
      }
    }); 
    props.listenToClick();
}

async function processLocation (e) {
  let finalObj = {};
  let response = await reverseGeoCoding(e.latlng);
  finalObj['address']= response.data.address;
  finalObj['latlng'] = e.latlng;
  let responseone = await postAPI(finalObj);
}

const LiveMap = () => {
    
    const [locations,setLocations] = useState([]);
    
    const markerIcon = new L.Icon({
        iconUrl : require("../../pin.png"),
        iconSize :[25,33],
        popupAnchor :[3,-26]
    
    });

    const fetchLocations = async() => {
     let response = await getAPI();
     setLocations(response.data);
    }

    React.useEffect(() => {
       fetchLocations();
    },[])

    const listenToClick = () => {
        fetchLocations();
    }

    return (
        <MapContainer  center={[22, 80]} zoom={5} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc) => <Marker position = {[loc?.latlng?.lat,loc?.latlng?.lng]} key={loc?.id} icon ={markerIcon} ></Marker>)}
            <LocationMarker listenToClick={listenToClick}/>
        </MapContainer>
    );
};
export default LiveMap