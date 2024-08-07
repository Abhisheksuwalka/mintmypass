import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminPanel from "./components/AdminPanel";
import EventDetails from "./components/EventDetails";
import EventList from "./components/EventList";
import EventRegister from "./components/EventRegister";
import Login from "./components/Login";
// import NFTValidation from "./components/NFTValidation";
import Signup from "./components/Signup";

const App = () => {
  const [token, setToken] = useState("");

  console.log("App component rendered");

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/admin" className="navLink">
          Add Event
        </Link>
        <Link to="/nft-validation" className="navLink">
          Validate NFT
        </Link>
        {!token ? (
          <>
            <Link to="/login" className="navLink">
              Login
            </Link>
            <Link to="/signup" className="navLink">
              Sign Up
            </Link>
          </>
        ) : (
          <button onClick={() => setToken("")} className="navButton">
            Logout
          </button>
        )}
      </nav>
      <Switch>
        <Route path="/" exact component={EventList} />
        <Route path="/events/:id" component={EventDetails} />
        <Route path="/register/:id" component={EventRegister} />
        <Route path="/admin" component={AdminPanel} />
        {/* <Route path="/nft-validation" component={NFTValidation} /> */}
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  );
};

export default App;
