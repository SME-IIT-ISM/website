import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Header,
  Footer,
  ScrollToTop,
  Home,
  Gallery,
  Events,
  Resources,
  OurTeam,
  About,
  Contact,
} from "./components";

function App() {
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
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
