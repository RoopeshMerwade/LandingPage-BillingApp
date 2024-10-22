import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
