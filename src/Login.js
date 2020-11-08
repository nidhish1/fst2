import React from 'react'
import Button from '@material-ui/core/Button';
import './Login.css'
function Login() {

    const signIn = () => {

    }
    return (
        <div className="login"> 
        <div className ="login_logo">
            <img src="https://picsum.photos/200"/>
            
        </div>
        <Button variant="contained" color="primary" onClick = "signIn">
                Sign In
            </Button>
        </div>
    )
}

export default Login
