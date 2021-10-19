import "./App.css";
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { News } from "./pages/News";
import { CustomNavbar } from "./components/CustomNavbar";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <CustomNavbar />
           <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
      {/* <div>
        <CustomNavbar />
        <Home />
        <News />
        <About />
        <Contact />
      </div> */}
      <Footer />
    </Router>

    //  <Router>
    //    <div>
    //      <CustomNavbar />
    //      <Route exact path="/" component={Home} />
    //      <Route exact path="/about" component={About} />
    //      <Route exact path="/news" component={News} />

    //         </div>
    //  </Router>
  );
}

export default App;
