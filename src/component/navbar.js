import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
      <Link to="/" className="navbar-brand">
      Student Management
        </Link>
      </div>
      <ul className="nav navbar-nav">
      <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/student'>Student</NavLink></li>
            <li><NavLink to='/course'>Course</NavLink></li>
            <li><NavLink to='/student-course'>Student Course</NavLink></li>
      </ul>
    </div>
    </nav>


  );
};




export default Navbar;
