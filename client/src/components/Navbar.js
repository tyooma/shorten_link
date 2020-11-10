import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/auth.hook';

const Navbar = () => {
  const auth = useAuth(AuthContext)
  const history = useHistory()

  const logoutHandler = event => {
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper pink accent-2 navbar">
        <span className="brand-logo">Logo</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to="/links">
              Links
            </NavLink>
          </li>
          <li>
            <a
              href="/"
              onClick={logoutHandler}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
