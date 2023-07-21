import React from "react";
import PropTypes from "prop-types";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = ({ marker }) => {
  const MapWithAMarker = withGoogleMap(() => {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: marker.lat, lng: marker.lng }}
      >
        {marker && (
          <Marker
            label={marker.name}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        )}
      </GoogleMap>
    );
  });

  return (
    <MapWithAMarker
      containerElement={<div className="mapContainer full-flex" />}
      mapElement={<div className="map" />}
    />
  );
};

Map.propTypes = {
  marker: PropTypes.object,
};

export default Map;
