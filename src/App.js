import React, { useState } from "react";
import './App.css';
import SideBar from "./SideBar";
import Chat from "./Chat";
import Login from './Login';
import {useStateValue} from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
              <SideBar />
              <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
              <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
