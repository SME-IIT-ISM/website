import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Example from "./components/Coursel";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Sponser from "./components/Sponser";

function App() {
  return (
    <div className="App">
      <Header />
      <Example />
      <br />
      <br />
      <Intro />
      <br />
      <br />
      <Sponser />
    </div>
  );
}

export default App;
