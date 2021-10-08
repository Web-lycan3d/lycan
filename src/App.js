/** @format */

import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/Navbar/Nav";
import Landing from "./pages/home/Landing";

function App() {
  return (
    <div className="app">
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
