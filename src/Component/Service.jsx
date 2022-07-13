import React from "react";
import { NavLink } from 'react-router-dom';
function Service() {
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
                        <NavLink to="/Services/1234">Service</NavLink>
                    </li>
                    
                    <h1>this is Service page</h1>
                </nav>
            </header>
        </>
    )
}

export default Service;