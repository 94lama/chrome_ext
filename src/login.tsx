import secrets from './secret.json';
import {secretNum} from "./secret";


export default function Login(){
    return(
<form className="container mt-3">
    <thead>{secretNum}</thead>
    <tbody>
        <tr>
            <p>Username</p>
            <input type="email" id="user" required placeholder='Insert your username' />
        </tr>
        <tr>
            <p>Password</p>
            <input type="password" id="password" required placeholder='Type your password' />
        </tr>
        <tr>
            <p>Confirm password</p>
            <input type="password" id="confirm_password" required placeholder='Confirm your password' />
        </tr>
        <br />
        <tr>
            <button type="submit" onClick={function (e) {
                let userName = (document.getElementById('user') as HTMLInputElement).value;
                let psw = (document.getElementById('password') as HTMLInputElement).value;
                let confirm_password = (document.getElementById('confirm_password') as HTMLInputElement);
                let pswCon = confirm_password.value;
/*                 const encryptSecret = () => {
                    let data = CryptoJS.AES.encrypt(
                        JSON.stringify(secretNum),psw)
                        .toString();
                } */
                if (psw !== pswCon) {
                    confirm_password.setCustomValidity("Passwords Don't Match");
                } else {
                    let num = secrets.length;
                    secrets[num - 1] = { 'secret': String(secretNum), 'user': userName, 'password': psw };
                    secrets.push({ 'secret': '', 'user': '', 'password': '' });
                    console.log(secrets, userName, psw);
                    e.preventDefault();
                }
            }
            } >Login</button>
        </tr>
    </tbody>
</form>
)}