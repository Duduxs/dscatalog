import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.scss';

const NavBar = () => (

    <nav className="row bg-primary main-nav">
        <div className="col-2">
         
            <NavLink to="/" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </NavLink>
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
                    <NavLink activeClassName="active" to="/" exact>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalog">
                        CATÁLOGO
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin">
                        ADMIN
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;