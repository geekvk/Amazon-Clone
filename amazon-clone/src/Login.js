import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from "./Firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase login
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error =>alert(error.message))

    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth); // successfully createa new user
            if(auth)
            {
                history.push('/');
            }
        })
        .catch(error =>alert(error.message))
        // firebase register
    }
    return (
        
        <div className="login">
            <Link to ="/">
            <img className="login__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1> Sign in</h1>
                <form>
                    <h5> Email Address </h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5> Password </h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn}
                        className="login__sighInButton"> Sign In</button>
                </form>
                <p>
                    By siging-in you agree to Amazon Colne's conditions of use & sale.
                    Please see your privacy notice, our cookies notice and our Interest based Ads 
                    Notice
                </p>
                <button onClick={register}
                    className="login__registerButton"> Create your amazon account</button>
            </div>
        </div>
        
    )
}

export default Login
