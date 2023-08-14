import React from "react";
// Import your CSS file for styling
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar  navbar-expand bg-dark navbar-dark">
        <div class="container-fluid">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7au0woU0trzGhSVvE-ce7JY9uf9snBMPgag&usqp=CAU"
              alt="logo.."
              height={"40px"}
              width={"40px"}
            ></img>
          </div>
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link class="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/Library"}>
                Library
              </Link>
            </li>
            
          </ul>
          
          <Link className="btn btn-primary text-dark mx-1" to="/Login">
            Login
          </Link>
          <Link className="btn btn-primary text-dark mx-1" to="/Signup">
            SignUp
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
