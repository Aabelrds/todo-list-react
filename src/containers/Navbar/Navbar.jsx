import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__left__item">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="navbar__left__item">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
        <div className="navbar__left__item">
          <input className="navbar__left__item__input"/>
        </div>
      </div>

      <div className="navbar__right">
        <FontAwesomeIcon className="navbar__right__item" icon={faPlus} />
        <Link className="navbar__right__item" to="/completed">Tareas completadas</Link>
      </div>
    </nav>
  );
}

export default Navbar;
