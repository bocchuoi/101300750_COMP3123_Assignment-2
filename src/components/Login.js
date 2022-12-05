
import React from 'react';
import "./css/form.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const navigate = useNavigate();

    const [username, setUserName] = React.useState("");    
    const [password, setPassword] = React.useState("");  
    const [msg, setMsg] = React.useState("");  

    const onSubmit = async (e) => {

        await axios.post(`${props.serverIp}/api/user/login`, {username:username, password:password}, {

        }).then((res)=>{
            console.log(res);
            if (res.data.status == "logged in") {
                localStorage.setItem('loggedin', true);
                navigate("/");
            }
        })
        .catch((err)=>{
            console.log(err)
            setMsg(err.response.data.msg)
        });
    };
    return (
        <div>
            <form>
                <h3>Login</h3>
                <label>Username</label>
                <input type="text" placeholder="Username" value={username} onChange={e=>setUserName(e.target.value)}/>
                <label>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type="button" onClick={onSubmit}>Log In</button>
                <label className="msg">{msg}</label>
            </form>
        </div>
    )
}




