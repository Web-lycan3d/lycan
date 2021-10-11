/** @format */

import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/Navbar/Nav";
import Landing from "./pages/home/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from "./pages/services/Services";

function App() {
  return (
    <Router>
      {" "}
      <Nav />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/service/:id" exact component={Services} />
      </Switch>{" "}
      <Footer />
    </Router>
  );
}

export default App;
