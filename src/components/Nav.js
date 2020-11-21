import React, { useEffect, useState } from 'react';
import "./styles/Nav.css"

const Nav = () => {

    // Scroll listenings
    const [show, handleShow] = useState( false )

    useEffect( () => {

        window.addEventListener( 'scroll', () => {

            window.scrollY > 100 
                ? handleShow( true )
                : handleShow( false )

        });

        return () => { window.removeEventListener( 'scroll' ); }

    }, [])

    return (
        <div className={`nav  ${ show && "nav__black" }`}>
            
            <a href="../index.js" >
                <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                />
            </a>

            <img
                className="nav__avatar"
                src="https://occ-0-1930-1740.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABf_6kd7DRQYcoCTZgGV94aTFEt5Fz4aqsmWZPF4esZ4PxmjIVYRK8fF5eHto5zXoNV5r0M2uUI4iQ8CoQPAd3uCyVkPE.png?r=8d1"
                alt="Avatar"
            />
            
        </div>
    )
}

export default Nav;
