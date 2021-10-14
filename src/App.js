/** @format */

import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/Navbar/Nav";
import Landing from "./pages/home/Landing";
import { Route, Switch, useLocation } from "react-router-dom";
import Services from "./pages/services/Services";
import { AnimatePresence } from "framer-motion";
import Sector from "./pages/sector/Sector";

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Landing} />
          <Route path="/service/:id" exact component={Services} />
          <Route path="/sector/:id" exact component={Sector} />
        </Switch>{" "}
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
