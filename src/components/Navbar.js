
import React from 'react';
import {Link} from 'react-router-dom'

import logo from '../images/image-1.svg'

import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
           <header className="Navbar">
               <nav className="container-fluid">
                   <Link className="Navbar__brand" to="/">
                       <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                       <span className="font-weight-light">Platzi</span>
                       <span className="font-weight-bold">Conf</span>
                   </Link>
               </nav>
           </header>
        )
    }
}

export default Navbar;