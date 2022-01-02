import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Postgrid from "./components/postgrid/Postgrid";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Postgrid></Postgrid>
      <Sidebar className="sidebar" />
      <Footer />
    </>
  );
}

export default App;
