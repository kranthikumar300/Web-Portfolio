import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import { ScrollNavs } from "./utills/scrollNavs";

function App() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen overflow-x-hidden">
        <ScrollNavs />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Services />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
