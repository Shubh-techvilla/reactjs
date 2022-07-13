import React from "react";
import { NavLink } from 'react-router-dom';
function Services() {
    return (
        <>
            <header>
                <nav>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services/1234/kjhjhj">Service</NavLink>
                    </li>
                    <h1>this is Services page I got this</h1>
                </nav>
            </header>
        </>
    )
}

export default Services;