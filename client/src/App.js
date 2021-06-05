import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, Home, About, OurTeam, Contact } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/team" exact component={() => <OurTeam />} />
          <Route path="/contact" exact component={() => <Contact />} />

          {/* <Route path="/contact" exact component={() => <Contact />} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
