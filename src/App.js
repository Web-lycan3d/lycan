/** @format */

import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/Navbar/Nav";
import Landing from "./pages/home/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from "./pages/services/Services";
import About from "./pages/about/about.component";
import Ecosystem from "./pages/ecosystem/ecosystem.component"
import Academia from "./pages/academia/academia.components"

function App() {
  return (
    <Router>
      {" "}
      <Nav />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" exact component={About} />
        <Route path="/ecosystem" exact component={Ecosystem} />
        <Route path="/academia" exact component={Academia} />
        <Route path="/service/:id" exact component={Services} />
      </Switch>{" "}
      <Footer />
    </Router>
  );
}

export default App;
