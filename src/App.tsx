import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
