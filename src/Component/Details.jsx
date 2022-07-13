import React from "react";
import { NavLink } from 'react-router-dom';
function Details() {
    return (
        <>
            <header>
                <nav>
                    <li>
                        <NavLink to="/Details" >Details</NavLink>
                    </li>
                    <h1>this is the details page</h1>
                </nav>
            </header>
        </>
    )
}

export default Details;
