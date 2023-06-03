import React, { useContext, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";
import { GlobalState } from '../context/GlobalContext';
import "../CSS/SignOutModal.css"

//*  =================== Styling Objects ===================
let mainContainer ={"position":'absolute',"marginTop":'5rem'}
let mapContainer = {height:"40vh",width:"40vw",borderRadius:'1.5rem'}
let styling_p_Tag = {fontSize:'.7rem',fontWeight:600, float:'right'}
let styling_span_Tag = {fontSize:'.7rem',color:"#B6B6B6"}

function MapComponent() {
    const {user} = useContext(GlobalState);
    console.log(user[0].name);

  const [latLong, setlatLong] = useState();


useEffect(() => {
  setlatLong({ geocode: [Number(user[0].address.geo.lat).toString()== "NaN"?Number(user[0].address.geo.lng):Number(user[0].address.geo.lat), Number(user[0].address.geo.lng).toString() == "NaN" ?Number(user[0].address.geo.lat):Number(user[0].address.geo.lng)] })
}, [user]);


// ? ============== to show marker in the map ==============
    const customIcon = new Icon({
      iconUrl:
        "https://png.pngtree.com/png-clipart/20220131/original/pngtree-3d-pin-map-marker-location-front-view-png-image_7249831.png",
      iconSize: [38, 38],
    });

  return (
  latLong&&  <div style={mainContainer}> 
    <MapContainer
    style={mapContainer}
    center={[16, 70]}
    zoom={1}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright"'
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      <div>
        <Marker position={latLong.geocode} icon={customIcon}>
          <Popup>
         <div style={{textAlign:'center'}}> <img width={40} height={40} style={{borderRadius:"50%"}} src={user[0].profilepicture} alt="" /></div>
            <h4>{user[0].name}</h4>
          </Popup>
        </Marker>
      </div>
  </MapContainer>
  <p style={styling_p_Tag}><span style={styling_span_Tag}>Lat:</span>- {latLong.geocode[0]} &nbsp;&nbsp;&nbsp;<span style={styling_span_Tag}>Long:</span>-{latLong.geocode[1]}</p>
  </div>
  )
}

export default MapComponent
