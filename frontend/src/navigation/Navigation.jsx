import { useContext } from "react";
import UserContext from "../auth/UserContext";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";


/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  function renderNavLinks(){
    if(currentUser){
        return(
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink to="/companies">Companies</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/" onClick={logout}>Log out</NavLink>
                </NavItem>
            </Nav> 
        )
    }
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
        </Nav>
    )
}

//   function loggedInNav() {
//     return (
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item mr-4">
//             <NavLink className="nav-link" to="/companies">
//               Companies
//             </NavLink>
//           </li>
//           <li className="nav-item mr-4">
//             <NavLink className="nav-link" to="/jobs">
//               Jobs
//             </NavLink>
//           </li>
//           <li className="nav-item mr-4">
//             <NavLink className="nav-link" to="/profile">
//               Profile
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/" onClick={logout}>
//               Log out {currentUser.first_name || currentUser.username}
//             </Link>
//           </li>
//         </ul>
//     );
//   }

//   function loggedOutNav() {
//     return (
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item mr-4">
//             <NavLink className="nav-link" to="/login">
//               Login
//             </NavLink>
//           </li>
//           <li className="nav-item mr-4">
//             <NavLink className="nav-link" to="/signup">
//               Sign Up
//             </NavLink>
//           </li>
//         </ul>
//     );
//   }

  return (
    <div>
        <Navbar expand="md">
            <NavLink exact to="/" className="navbar-brand">
                Jobly
            </NavLink>
            {renderNavLinks()}
        </Navbar>
    </div>
  );
}

export default NavBar;
