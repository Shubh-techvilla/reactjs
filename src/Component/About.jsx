import React from "react";
import { NavLink } from 'react-router-dom';
function About() {
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
                        <NavLink to="/ContactUs">ContactUs</NavLink>
                    </li>
                    <h1>this is About page</h1>
                </nav>
            </header>
        </>
    )
}

export default About;