import React from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap as Gmap,
} from "react-google-maps";

const Map = () => {
	return (
		<Gmap defaultZoom={10} defaultCenter={{ lat: 24.3065, lng: 91.7296 }} />
	);
};
const API_KEY = "AIzaSyAh3JhWMHm2LwmvdiBw5Pa_t_F2WTyDIyA";

const WrappedMap = withScriptjs(withGoogleMap(Map));

const SreemangalMap = () => {
	return (
		<div>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `500px`, width: "400px" }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default SreemangalMap;
