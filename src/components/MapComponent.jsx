import React, { useContext, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";
import { GlobalState } from '../context/GlobalContext';



//*  =================== Styling Objects ===================
let mainContainer ={"position":'absolute',"marginTop":'5rem'}
let mapContainer = {height:"40vh",width:"40vw",borderRadius:'1.5rem'}
let styling_p_Tag = {fontSize:'.7rem',fontWeight:600, float:'right'}
let styling_span_Tag = {fontSize:'.7rem',color:"#B6B6B6"}

function MapComponent() {
    const context = useContext(GlobalState);

  const [state, setstate] = useState([

    // ? ==================== Some Users have invalid lat or long (below code is just to avoid errors) ==================== 
    { geocode: [Number(context.user[0].address.geo.lat).toString()== "NaN"?Number(context.user[0].address.geo.lng):Number(context.user[0].address.geo.lat), Number(context.user[0].address.geo.lng).toString() == "NaN" ?Number(context.user[0].address.geo.lat):Number(context.user[0].address.geo.lng)],
    popUp: context.user[0].name,
    imgUrl: context.user[0].profilepicture,
    }
  ]
);


// ? ============== to show marker in the map ==============
    const markers = state
    const customIcon = new Icon({
      iconUrl:
        "https://png.pngtree.com/png-clipart/20220131/original/pngtree-3d-pin-map-marker-location-front-view-png-image_7249831.png",
      iconSize: [38, 38],
    });

  return (
    <div style={mainContainer}> 
    <MapContainer
    style={mapContainer}
    center={[16, 70]}
    zoom={1}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright"'
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {markers.map((marker,index) => (
      <div key={index}>
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>
         <div style={{textAlign:'center'}}> <img width={40} height={40} style={{borderRadius:"50%"}} src={marker.imgUrl} alt="" /></div>
            <h4>{marker.popUp}</h4>
          </Popup>
        </Marker>
      </div>
    ))}
  </MapContainer>
  <p style={styling_p_Tag}><span style={styling_span_Tag}>Lat:</span>- {state[0].geocode[0]} &nbsp;&nbsp;&nbsp;<span style={styling_span_Tag}>Long:</span>-{state[0].geocode[1]}</p>
  </div>
  )
}

export default MapComponent
