import secrets from '../secret.json';
import { useState } from 'react';

export default function LogIn(){
/*     return(
        <form id="login">
        <thead>Log-in</thead>
        <tbody>
            <tr>
                <p>Username</p>
                <input type="string" id="user" required placeholder='Insert your username' />
            </tr>
            <tr>
                <p>Password</p>
                <input type="password" id="password" required placeholder='Type your password' />
            </tr>
            <br />
            <tr>
                <button type='submit' id='loginBtn' onClick={function onClick(e) {
                    e.preventDefault();
                    let user = (document.getElementById('user')) as HTMLInputElement;
                    let password = (document.getElementById('password')) as HTMLInputElement;
                    userName = user.value;
                    psw = password.value;
                    setNum(() => secrets.findIndex(el => el.id === userName));
                    console.log(num);

                    if (secrets.find(el => el.id === userName) != null) {
                        if (secrets.find(el => el.password === psw) != null) {
                            setActiveAlt('none');
                            setActive3('block');
                            setNum(() => num - 1);
                            console.log(secrets, userName, psw);
                        } else { alert('Incorrect password') }
                    } else { alert('User ot found') }
                }
                }>Login</button>
            </tr>
        </tbody>
    </form>
    ) */
}