import secrets from '../secret.json';
import { useState } from 'react';

interface ListProps {
    user: string;
    num: number;
  }

export default function Profile(props: ListProps) {
    const [secretNum, setSec] = useState(Math.round(Math.random() * 1000000));

    return (
        <div id='profile'>
            <thead>
                <h2>{props.user}</h2>
                <p>Welcome back!</p>
            </thead>
            <tbody>
                <tr>
                    <td>{secrets[props.num].secret !== "" ? secrets[props.num].secret : ''}
                        <button onClick={() => {
                            setSec(() => Math.round(Math.random() * 1000000));
                            secrets[props.num].secret = (String(secretNum));
                            console.log(secrets)
                        }}>Chage</button>
                    </td>
                </tr>
                <button onClick={() => {
/*                     setActiveAlt(() => 'block');
                    setActive3(() => 'none'); */
                }}>Log out</button>
            </tbody>
        </div>
    )
}