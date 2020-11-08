import React from 'react'
import Button from '@material-ui/core/Button';
import './Login.css'
import { auth,provider } from './firebase';
function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch( (error)=> {
           alert(error.message) 
        })
    }
    return (
        <div className="login"> 
        <div className ="login_logo">
            <img src="https://picsum.photos/200" alt = "logo"/>
            
        </div>
        <Button variant="contained" onClick ={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
