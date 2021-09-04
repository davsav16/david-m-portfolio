import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import {Nav, NavLink, Bars } from './NavBarElements'

const Navbar = () => {
    const [sidebar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sidebar);
    
    return (
        <>

            <Nav>
                <NavLink to="/david-m-portfolio">
                    <h1 id="portTitle">David's Portfolio</h1>
                </NavLink>
                <Bars onClick={showSideBar}/>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                   <ul className="nav-menu-items" onClick={showSideBar}>
                       <li className="navClose">
                           <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                           </Link>
                       </li>
                       <li className="nav-text">
                           <Link to="/david-m-portfolio">
                               About
                           </Link>
                       </li>
                       <li className="nav-text">
                           <Link to="/work">
                               Projects
                           </Link>
                       </li>
                       <li className="nav-text">
                           <Link to="/contact-me">
                               Reach Out!
                           </Link>
                       </li>
                       <li className="nav-text" >
                           <Link to="/Resume">
                               Resume
                           </Link>
                       </li>
                   </ul>
                </nav>
                {/* <NavMenu>
                    <NavLink to="/david-m-portfolio" activeStyle>
                        About 
                    </NavLink>
                    <NavLink to="/work" activeStyle>
                        Past Projects 
                    </NavLink>
                    <NavLink to="/contact-me" activeStyle>
                        Reach Out! 
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume 
                    </NavLink>
                </NavMenu> */}
            </Nav>
        </>
    );
}

export default Navbar;