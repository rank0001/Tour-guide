import React from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap as Gmap,
} from "react-google-maps";

const Map = () => {
    console.log('who runs first');
	return (
		<Gmap defaultZoom={10} defaultCenter={{ lat:23.3820 , lng: 92.2938}} />
	);
};
const API_KEY = "AIzaSyAh3JhWMHm2LwmvdiBw5Pa_t_F2WTyDIyA";

const WrappedMap = withScriptjs(withGoogleMap(Map));

const SajekMap = () => {
    
    
	return (
		<div >
			<WrappedMap 
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default SajekMap;
