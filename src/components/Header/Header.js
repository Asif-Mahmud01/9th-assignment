import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Ten minutes quiz</h1>
            <nav>
                <Link to='/Topic'>Topics</Link>
                <Link to='/Statistics'>Statistics</Link>
                <Link to='/Blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;