import React from 'react';
import '../css/Header.css'

function Header() {
    const nome = "Reinaldo"
    return ( 
        <div className='header'>
            <h1>Olá {nome}</h1>
            <p>Bem-vindo(a)</p>
        </div>
        
     );
}

export default Header;