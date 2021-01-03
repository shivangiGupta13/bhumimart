
import React from 'react';
import Dashboard from "./Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import  "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Assets from "./Assets";
import Tracker from "./Tracker";
import Planning from "./Planning";
import Navbar from "./Navbar";
import "./index.css";



const App=()=>{
  return(
    <>
    
    <Navbar/>
    <div class="content">
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/assets" component={Assets}/>
      <Route exact path="/tracker" component={Tracker}/>
      <Route exact path="/planning" component={Planning}/>
      <Redirect to="/"/>
    </Switch>
    </div>
    </>
  );
}
export default App;
