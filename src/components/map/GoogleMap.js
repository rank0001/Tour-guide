import React from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap as Gmap,
} from "react-google-maps";

const Map = (lat,long) => {
    console.log('who runs first');
	return (
		<Gmap defaultZoom={10} defaultCenter={{ lat:lat , lng: long}} />
	);
};
const API_KEY = "AIzaSyAh3JhWMHm2LwmvdiBw5Pa_t_F2WTyDIyA";

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMap = (props) => {
    console.log(props);
    
	return (
		<div >
			<WrappedMap lat={props.lat} long={props.long}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default GoogleMap;
