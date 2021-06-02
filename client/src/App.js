import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CarouselContainer from "./components/CarouselContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselContainer />
    </div>
  );
}

export default App;
