import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  Gallery,
  Events,
  Resources,
  OurTeam,
  About,
  Contact,
} from "./components";

function App() {
  // Loading Page animation
  // const [isLoading, setLoading] = useState(true);

  // function fakeRequest() {
  //   return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  // }

  // useEffect(() => {
  //   fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove();
  //       setLoading(!isLoading);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return null;
  // }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/events/:id" component={Events} />
          <Route path="/resources/:id" component={Resources} />
          <Route path="/team" component={OurTeam} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
