import { useState } from "react";
import secrets from './secret.json';
import { encrypt, decrypt, compare } from 'n-krypta';

var userName = '';
var psw = '';
var pswCon = '';

export default function Secret() {

    const [isActive1, setActive1] = useState('block');
    const [isActive2, setActive2] = useState('none');
    const [isActiveAlt, setActiveAlt] = useState('none');
    const [isActive3, setActive3] = useState('none');
    const [num, setNum] = useState(0);
    const [secretNum, setSec] = useState(String(Math.round(Math.random() * 1000000)));



    return (
        <div>
            <div style={{ display: secrets.length < 2? isActive1 : 'none' }}>
                <p>{secretNum}</p>
                <button onClick={() => { setActive1('none'); secrets.length < 2 ? setActive2('block') : setActiveAlt('block') }}>Ok</button>
            </div>
            <form id="signin" style={{ display: isActive2 }}>
                <thead>Create an account</thead>
                <tbody>
                    <tr>
                        <p>Username</p>
                        <input type="string" id="userSign" required placeholder='Insert your username' />
                    </tr>
                    <tr>
                        <p>Password</p>
                        <input type="password" id="passwordSign" required placeholder='Type your password' />
                    </tr>
                    <tr>
                        <p>Confirm password</p>
                        <input type="password" id="confirm_password" required placeholder='Confirm your password' />
                    </tr>
                    <br />
                    <tr>
                        <button type='submit' id='signinBtn' onClick={function onClick(e) {
                            e.preventDefault();
                            let user = (document.getElementById('userSign')) as HTMLInputElement;
                            let password = (document.getElementById('passwordSign')) as HTMLInputElement;
                            userName = user.value;
                            psw = password.value;
                            let confirm_password = (document.getElementById('confirm_password') as HTMLInputElement);
                            pswCon = confirm_password.value;

                            if (userName !== '') {
                                if (psw !== '') {
                                    if (psw === pswCon) {
                                        let encryptedNum = encrypt(secretNum, psw);
                                        let num = secrets.length;
                                        secrets[num - 1] = { "secret": encryptedNum, "id": userName, "password": psw };
                                        secrets.push({ "secret": "", "id": "", "password": "" });
                                        setActive2('none');
                                        setActive3('block');

                                        console.log(secrets, userName, psw, secretNum, encryptedNum);
                                    } else {
                                        alert("Passwords Don't Match");
                                    }
                                } else { alert('Please set a valid pasword') }
                            } else { alert('Please, insert a valid user') }
                        }
                        }>Login</button>
                    </tr>
                </tbody>
            </form>
            <form id="login" style={{ display:  secrets.length < 2?  'none' : isActiveAlt }}>
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
                                    setNum(() => secrets.length - 1);
                                    setSec(() => decrypt(secrets[num].secret, psw))
                                    console.log(secrets, userName, psw);
                                } else { alert('Incorrect password') }
                            } else { alert('User ot found') }
                        }
                        }>Login</button>
                    </tr>
                </tbody>
            </form>
            <div style={{ display: isActive3 }} id='profile'>
                <thead>
                    <h2>{userName}</h2>
                    <p>Welcome back!</p>
                </thead>
                <tbody>
                    <tr>
                        <td>{secretNum}
                            <button onClick={() => {
                                setSec(() => String(Math.round(Math.random() * 1000000)));
                                let encryptedNum = encrypt(secretNum, psw);
                                secrets[num].secret = encryptedNum;
                                console.log(secrets, secretNum);
                            }}>Change</button>
                        </td>
                    </tr>
                    <button onClick={() => {
                        setActiveAlt(() => 'block');
                        setActive3(() => 'none');
                    }}>Log out</button>
                </tbody>
            </div>
        </div >
    );
}

/* const encryptSecret = () => {
    let data = CryptoJS.AES.encrypt(
        JSON.stringify(secretNum), psw)
        .toString()
    return data
} */