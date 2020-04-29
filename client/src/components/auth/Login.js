import React, { useState } from 'react';
import authContext from '../../context/auth/authContext';


const Login = () => {
  const[user, setUser ] = useState({
    email: '',
    password: ''
  });

  const { email, password,  } = user;

  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login submit');
  }

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="email">Email Address</label>
         <input type="email" name="email" value={email} onChange={onchange}/>
       </div> 
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" name="password" value={password} onChange={onchange}/>
       </div> 

       <input type="submit" value="Login" className="btn btn-primary btn-block"/>
      </form>
      
    </div>
  )
}

export default Login;
