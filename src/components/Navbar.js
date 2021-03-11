
import React from 'react';

import logo from '../images/image-1.svg'

import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
           <header className="Navbar">
               <nav className="container-fluid">
                   <a className="Navbar__brand" href="#">
                       <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                       <span className="font-weight-light">Platzi</span>
                       <span className="font-weight-bold">Conf</span>
                   </a>
               </nav>
           </header>
        )
    }
}

export default Navbar;