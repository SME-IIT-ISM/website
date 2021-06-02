import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CarouselContainer from "./components/CarouselContainer";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselContainer />
      <br />
      <br />
      <br />
      <Intro />
    </div>
  );
}

export default App;
