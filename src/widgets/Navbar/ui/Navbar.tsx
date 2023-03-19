import React from 'react';
import {Link} from "react-router-dom";
import {classnames} from "shared/lib/classnames/classnames";

export const Navbar = () => {
    return (
        <div className={classnames('navbar', {}, [])}>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/about'}>About</Link>
            <br/>
        </div>
    );
};
