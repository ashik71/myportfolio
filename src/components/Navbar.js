import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Resume from './resume';
import Projects from './projects';
import About from './aboutme';
import Contact from './contact';
import Default from './default';


const Navbar = () => (
    <Switch>
        <Route exact path="/" component={Home} />        
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />        
        <Route exact path="/contact" component={Contact} />
        <Route component={Default} />
    </Switch>
)


export default Navbar;