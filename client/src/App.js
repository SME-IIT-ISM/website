import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Example from "./components/Coursel";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Header />
      <Example />
      <br />
      <br />
      <br />
      <Intro />
    </div>
  );
}

export default App;
