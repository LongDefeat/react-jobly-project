import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Homepage.css";

/** Homepage of Jobly Site
 * 
 * Displays welcome message to user and login/register buttons
 * 
 * 
 * Routed at /
 * 
 * Routes -> Homepage
 *  */ 

function Homepage(){
    const {currentUser} = useContext(UserContext)
    console.debug("Homepage", "currentUser=", currentUser)

    return (
        <div className="Homepage">
            <div className="container text-center">
                <h1 className="mb-4 font-weight-bold">Jobly</h1>
                <p className="lead">All the jobs in one, convenient place.</p>
                {currentUser
                    ? <h2>
                        Welcome Back, {currentUser.firstName || currentUser.username}!
                    </h2>
                    : (
                        <p>
                            <Link className="btn btn-primary font-weight-bold mr-3"
                                  to="/login">
                                    Log In
                            </Link>

                            <Link className="btn btn-primary font-weight-bold mr-3"
                                  to="/signup">
                                    Sign Up
                            </Link>
                        </p>
                    )}
            </div>
        </div>
    )
}

export default Homepage;
