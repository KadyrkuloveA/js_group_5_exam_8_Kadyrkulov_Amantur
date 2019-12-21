import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Quotes from "./Containers/Quotes/Quotes";
import Submit from "./Containers/Submit/Submit";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Quotes}/>
            <Route path='/submit' component={Submit}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
