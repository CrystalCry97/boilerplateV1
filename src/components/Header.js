import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Smart Attendance System</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Lecturer</NavLink>
        <NavLink to="/SchoolRegistrarPage" activeClassName="is-active">School Registrar</NavLink>
    </header>
);

export default Header;