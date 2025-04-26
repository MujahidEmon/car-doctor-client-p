import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then()
    .catch()
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li> <Link>Home</Link></li>
            <li> <Link>About</Link></li>
            <li> <Link>Services</Link></li>
            <li> <Link>Blog</Link></li>
            <li> <Link>Contact</Link></li>
          </ul>
        </div>
        <Link>
            <img src={logo} alt=""   className='w-10'/>  
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li> <Link>Home</Link></li>
            <li> <Link>About</Link></li>
            <li> <Link>Services</Link></li>
            <li> <Link>Blog</Link></li>
            <li> <Link>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <button onClick={handleLogout} className="btn">Logout</button> : <Link to={'/login'} className="btn">Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;
