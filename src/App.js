import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/components/header";
import GenOne from "./pages/genOne";
import GenTwo from "./pages/genTwo";
import GenThree from "./pages/genThree";
import GenFour from "./pages/genFour";
import GenFive from "./pages/genFive";
import GenSix from "./pages/genSix";
import GenSeven from "./pages/genSeven";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route component={GenOne} exact path="/" />
        <Route component={GenOne} path="/gen-1" />
        <Route component={GenTwo} path="/gen-2" />
        <Route component={GenThree} path="/gen-3" />
        <Route component={GenFour} path="/gen-4" />
        <Route component={GenFive} path="/gen-5" />
        <Route component={GenSix} path="/gen-6" />
        <Route component={GenSeven} path="/gen-7" />
      </Switch>
    </Router>
  );
}

export default App;
