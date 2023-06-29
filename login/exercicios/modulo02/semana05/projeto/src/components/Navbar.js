import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return ( 
        <div className='navbar'>
            
            <a href="https://www.gmail.com">Gmail</a>
            <a href="https://maps.google.com">Maps</a>
            {/* <img src={me} alt="Profile" /> */}
        </div>
    );
}

export default Navbar;