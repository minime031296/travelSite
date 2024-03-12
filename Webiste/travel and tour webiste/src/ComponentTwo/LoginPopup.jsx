import React, { useContext, useState } from 'react';
import './login.css';
import { AuthContext } from '../Authcontext/AuthContextProvider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const LoginPopup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        setIsLoggedIn(true)
        navigate('/')
        navigate('/main')
        navigate('/footer')
       
    }

    return (
        <div>
            <h2 className='LOGIN'>LOGIN</h2>

            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    placeholder="Username"  
                    className='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    className='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            
                <button type="submit" id='BTN'>Login</button>
                <p className='question'>Not yet registered ?{" "}
                <Link to="/register">Register Now</Link></p>
            </form>
        </div>
    );
}

export default LoginPopup;






































































































