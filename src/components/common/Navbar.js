import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = ({routes}) => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Router>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {routes.map((route, i) => (
                            <Link key={i}  className="nav-link" to={route.path}>{route.linkTitle}</Link>
                        ))}
                    </ul>
                </div>
                </Router>
            </nav>
    );
};

export default Navbar;