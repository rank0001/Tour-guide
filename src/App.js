import React from 'react';
import Navigbar from './components/navigationBar/Navigbar';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom"; 
import SajekBooking from './components/destinations/sajek/SajekBooking';
import SundarbanBooking from './components/destinations/sundarban/SundarbanBooking';
import SreemangalBooking from './components/destinations/sreemangal/SreeMongalBooking';
//import Switch from 'react-bootstrap/esm/Switch';


function App() {
  return (
    <Router>
    
			<Navigbar/>
			
				<div className="App">
        <Switch>
		    <Route exact path="/" component={Home}/> 
        <Route path="/booking/sajek" component={SajekBooking}/> 
        <Route path="/booking/sreemangal" component={SreemangalBooking}/> 
        <Route path="/booking/sundarban" component={SundarbanBooking}/>
        </Switch>
         </div>
         
		</Router>


  );
}

export default App;
