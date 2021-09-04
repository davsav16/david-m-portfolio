import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavBarElements'

const Navbar = () => {
    
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>David's Website</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
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
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;