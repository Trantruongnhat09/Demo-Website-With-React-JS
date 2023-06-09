import "./App.css";
import Header  from "./component/header/Header";
import  Hero  from "./component/hero/Hero";
import Slider from "./component/Slider/Slider";
import Virtual from "./component/Virtual/Virtual";
import Products from "./component/Products/Products";
import Testimonials from "./component/Testimonials/Testimonials";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
