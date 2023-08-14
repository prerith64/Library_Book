import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add form validation and API calls here
  };

  return (
    <div className="container">
      <div className="  row justify-content-center">
        <div className=" col-md-3">
          
            <div className="border border-3 border-dark p-4 mt-5 bg-white card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
              <label htmlFor='Login'>Name</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='Login'>Email</label>
                <input
                
                  type="email"
                  className="form-control mb-3"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='Login'>Password</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div>
                        <input type="checkbox" className='custom-control custom-checkbox '/>
                        <label htmlFor='checkbox' className='ms-1 mb-2'>
                            Remember Me
                        </label>
                    </div>
                <button type="submit" className="btn btn-primary btn-block" >
                <Link class="nav-link" to={"/Login"}>Login</Link>
                </button>
                
              </form>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default SignUp;
