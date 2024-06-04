import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../auth/UserContext";
import { useEffect } from 'react';

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

function PrivateRoute({ children }) {
    const { token, currentUser } = useContext(UserContext);
    let navigate = useNavigate();

    useEffect(()=>{
        if (!token && !currentUser) {
            navigate('/');
        }
    },[token, currentUser])

  return children;
}

export default PrivateRoute;
