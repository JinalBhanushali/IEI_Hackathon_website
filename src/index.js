import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import {BrowserRouter as Router, Switch, Route, LinkNav } from "react-router-dom";
import PageNotFound from "./component/PageNotFound";
import Home from './component/home';
import Scroll from './component/scroll';
import Statement from './component/statement';
import Team from './component/team';
import Logo from './img/logo.jpg';
import { ContactSupportOutlined } from '@material-ui/icons';
import { Link, animateScroll as scroll } from "react-scroll";

function Main() {
  const [btntoggle,setbtntoggle]=useState(true)
 function SetButton() {
   setbtntoggle(!btntoggle)
 }
  return(
    <div>
      {/* <Router> */}
        <div>
          <nav class="navbar navbar-expand-lg navbar-light position-fixed navbars">
            <a class="navbar-brand" href="#"> <img src={Logo} alt="logo" className="navbar-logo "></img></a>
            <button class="navbar-toggler bg-light" type="button" onClick={SetButton} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class={btntoggle ? "navbar-toggler-icon " : "fa fa-close"}></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto  text-light nav-link nav-links">
                <li class="nav-item active">
                   <Link activeClass="active"  class="" to="home" spy={true} smooth={true} offset={-70} duration={500} >Home  </Link>
                   {/* <Link to="home"  class="nav-link nav-links text-light" >Home</Link> */}
                </li>
                <li class="nav-item">
                  {/* <Link  to="/ProblemStatement" class="nav-link nav-links text-light" >Problem statement</Link> */}
                   <Link activeClass="active"  class="" to="ProblemStatement" spy={true} smooth={true} offset={-80} duration={500} >Problem statement  </Link>
                </li>
                <li class="nav-item active">
                   {/* <Link to="team"  class="nav-link nav-links text-light">Team</Link> */}
                    <Link activeClass="active"  class="" to="team" spy={true} smooth={true} offset={-70} duration={500} >Team  </Link>
                </li>
                {/* <li class="nav-item dropdown">
                  <Link to="/Home"  class="nav-link nav-links text-light"  >Home</Link>
                </li> */}
               
              </ul>
            </div>
          </nav>
        </div>
        {/* <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/ProblemStatement" component={Statement}></Route>
          <Route path="/team" component={Team}></Route>
          <Route component={PageNotFound}></Route>
        </Switch> */}
      {/* </Router> */}
      
       
      <Home/>
      <Statement/>
      <Team/>
      <Scroll showBelow={250} />
    </div>
  );
  
}
const main=<Main></Main>
ReactDOM.render(main, document.getElementById("root"));


