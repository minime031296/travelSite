import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        localStorage.setItem('UserID', email);
        localStorage.setItem('UserPassword', password);

        navigate('/login');
    };

    return (
        <div>
            <h1 className='register-heading'>Register</h1>

            <form onSubmit={handleRegister} className='form'>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    className='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    className='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" id="SUBMIT">Register</button>
                <p className='question'>Already Registered? 
                <Link to="/login" className='LOGIN-LINK'>LOGIN</Link></p>
            </form>
        </div>
    );
}

export default Register;
