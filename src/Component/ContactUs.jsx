import React from "react";
import { NavLink } from 'react-router-dom';
function ContactUs() {
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
                    <h1>this is contactUs page</h1>
                </nav>
            </header>
        </>
    )
}

export default ContactUs;