import React from "react";
import Navigbar from "./components/navigationBar/Navigbar";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/Routes/Routes";

function App() {
	return (
		<Router>
			<Navigbar />
			<div>
				<Routes />
			</div>
		</Router>
	);
}

export default App;
