import React from 'react';
import { Button } from "@material-ui/core";
import "./Login.css"
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn =() => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user
            })
        })
        .catch((error) =>  alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_container">
                <img
                    src="https://img.icons8.com/cotton/2x/chat.png"
                    alt=""
                />

                <div className="login_text">
                    <h1>Sign in to ChatApp</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
}

export default Login;
