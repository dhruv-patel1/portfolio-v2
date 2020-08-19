import React from "react";
import {BrowserRouter , Route} from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const AppRouter = () => (
    <div className="main">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Dashboard/>
                <Route path="/_#home" exact={true} component={Dashboard}/>
                <Route path="/_#about" component={About}/>
                <Route path="/_#skills" component={Skills}/>
                <Route path="/_#projects" component={Projects}/>
                <Route path="/_#contact" component={Contact}/>  
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </BrowserRouter>
        
    </div>
    
);

export default AppRouter;