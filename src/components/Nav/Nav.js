import React, { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../config/api';
import { removeUser, getUser } from '../../config/auth';
import { NavLink } from 'react-router-dom';
function Nav() {
    const user = getUser();
    let menu;
    let history = useHistory();
    const handleLogout = e => {
        removeUser();
        history.push("/");
    }
    if (user == null) {
        menu = (<li><Link to="/login" className="">Login</Link> </li>)
    } else {
        menu = (<Fragment>
                <li><Link to="/post" className="">Post</Link></li>
                <li><a onClick={handleLogout} className="">Logout</a></li>
                 </Fragment>
        );
    }
    return (
        <div className="navigasi-atas">
            <nav role="navigation"  className="navigation">
                <div className="navbar">
                    <Link to="/"  className="logo-web">
                        <img height="40" src="/logo.svg" alt="logo" /></Link>
                    <ul className="nav-menu">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link">Home</NavLink>

                        </li>
                        {menu}
                    </ul>

                </div>
            </nav>
           
        </div>
    )
}
export default Nav;