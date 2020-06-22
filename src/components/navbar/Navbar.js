import React from 'react';
import { NavLink } from "react-router-dom";



const Navbar = ({routes}) => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {routes.map((route, i) => (
                            <li key={i} className="nav-item">
                                <NavLink   className="nav-link" to={route.path}>{route.linkTitle}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
    );
};

export default Navbar;