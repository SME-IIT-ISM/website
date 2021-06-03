import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CarouselContainer from "./components/CarouselContainer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Sponser from "./components/Sponser";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselContainer />
      <br />
      <br />
      <Intro />
      <br />
      <br />
      <Sponser />
      <Footer />
    </div>
  );
}

export default App;
