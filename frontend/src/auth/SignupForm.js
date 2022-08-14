import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

/**Signup Form
 * 
 * Displays form and manages update to state on changes by user
 * 
 * On submission: 
 * - calls signup function prop
 * - redirects to /companies route
 * 
 * Routes -> Signup Form -> Alert
 * Routed as /signup
 * 
 */

function SignupForm ({ signup }){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
      });
    const [formErrors, setFormErrors] = useState([]);
    
    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors,
    );

    /** Handle form submission
     * 
     * Calls login function prop and, if successful, redirects back to /companies
     */

    async function handleSubmit(e){
        e.preventDefault();
        let result = await signup(formData);
        if (result.success){
            navigate("/companies");
        } else {
            setFormErrors(result.errors);
        }
    }

    /** Update form data field */
    function handleChange(e){
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    return (
        <div className="SignupForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h2 className="mb-3">Sign Up</h2>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    name="username"
                                    className="form-control"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    name="firstName"
                                    className="form-control"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    name="lastName"
                                    className="form-control"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                                onSubmit={handleSubmit}
                                >
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;