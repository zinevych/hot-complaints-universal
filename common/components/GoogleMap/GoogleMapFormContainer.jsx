/* global google */
import _ from "lodash";
import GoogleMapElement from './GoogleMapElement.jsx';

import React from "react";

import './google-map.scss';

export default class GoogleMapFormContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      markers: []
    };
  }

  shouldComponentUpdate(nextProps) {
    return this.props.reports.newReport.marker && nextProps.reports.newReport.marker &&
    (this.props.reports.newReport.marker.lat !== nextProps.reports.newReport.marker.lat ||
    this.props.reports.newReport.marker.lng !== nextProps.reports.newReport.marker.lng)
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
    console.log(event.latLng.lat())
    const nextMarkers = [
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
      }
    ];
    this.setState({
      markers: nextMarkers,
    });

    this.props.reportsActions.changeNewReportField({
      marker: {
        lat: nextMarkers[0].position.lat(),
        lng: nextMarkers[0].position.lng()
      }
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  handleMarkerRightClick = (targetMarker) => {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });

    this.props.reportsActions.changeNewReportField({
      marker: {
        lat: nextMarkers.position.lat(),
        lng: nextMarkers.position.lng()
      }
    });
  }

  render() {
    return (
      <div className="google-maps__wrapper">
        <GoogleMapElement
          containerElement={
            <div className="google-maps__container" />
          }
          mapElement={
            <div className="google-maps__map-element" />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    );
  }
}