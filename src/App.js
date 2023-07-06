import React from "react";
import Home from "./pages/home/Home";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => (
 <>
     <Router>
      <Switch>
            <Route exact path="/" component={Home} />
      </Switch>
    </Router>
 </>
);

export default App;
