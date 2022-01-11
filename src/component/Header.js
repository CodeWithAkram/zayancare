import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <div className="mainheader">
                    <div className="logo">
                        <figure>
                            <NavLink to="/" exact activeClassName="active">
                                <img src="images/logo.png" alt="logo" />
                            </NavLink>
                        </figure>
                    </div>
                    <nav>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        <NavLink to="/find-doctors" exact activeClassName="active">Find Doctors</NavLink>
                        <NavLink to="/consultants" activeClassName="active">Consultants</NavLink>
                        <NavLink to="/medicine" activeClassName="active">Medicine</NavLink>
                        <NavLink to="/lab-tests" activeClassName="active">Lab Tests</NavLink>
                        <NavLink to="/surgeries" activeClassName="active">Surgeries</NavLink>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </nav>
                    <div className="headerbutton">
                        <button>Login / Signup</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
