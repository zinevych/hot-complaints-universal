import React from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';


const GoogleMapElement = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={5}
    defaultCenter={props.defaultCenter}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default GoogleMapElement