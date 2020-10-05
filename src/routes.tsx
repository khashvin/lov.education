import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const Routes = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/university" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route>
            <div>404</div>
        </Route>
      </Switch>
    </div>
  );

export default Routes;