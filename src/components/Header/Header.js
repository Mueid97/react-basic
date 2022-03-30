import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Wecome to my routes</h1>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/users">Users</CustomLink>
            </nav>
        </div>
    );
};

export default Header;