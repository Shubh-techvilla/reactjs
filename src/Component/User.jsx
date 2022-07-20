import React from "react";
import { NavLink } from 'react-router-dom';
function User(props) {
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
                    {/* <li>
                        <NavLink to={props.value.id}>ContactUs</NavLink>
                    </li> */}

                    <h1>this is User page</h1>
                </nav>
            </header>
        </>
    )
}

export default User;