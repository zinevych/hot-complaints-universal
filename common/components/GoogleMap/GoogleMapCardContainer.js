/* global google */
import _ from "lodash";
import GoogleMapElement from './GoogleMapElement.jsx';

import React from "react";

import './google-map.scss';

export default class GoogleMapCardContainer extends React.Component {

  constructor() {
    super();
  }

  handleMapLoad = (map) => {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick = (event) => {

  }

  handleMarkerRightClick = (targetMarker) => {

  }

  render() {
    console.log(this.props.item.marker);

    return (
      <div className="google-maps__wrapper">
        <GoogleMapElement
          containerElement={
            <div className="google-maps__container" />
          }
          mapElement={
            <div className="google-maps__map-element" />
          }
          defaultCenter={{ lat: 49, lng: 30.044922 }}
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={[{
            position: {
              lat: +(this.props.item.marker.lat),
              lng: +(this.props.item.marker.lng)
            }           
          }
          ]}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    );
  }
}