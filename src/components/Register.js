
import React from 'react';
import "./css/form.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
    const navigate = useNavigate();
    const [username, setUserName] = React.useState("");    
    const [password, setPassword] = React.useState("");  
    const [isRegisterd, setIsRegistered] = React.useState(false);  
    const [email, setEmail] = React.useState("");  
    const [msg, setMsg] = React.useState("");  

    const onSubmit = async (e) => {
        await axios.post(`${props.serverIp}/api/user/signup`, {username:username, password:password, email:email}, {
        }).then((res)=>{
            console.log(res);
            setMsg(res.data.msg + ". Please sign in!")
            setIsRegistered(true)
        })
        .catch((err)=>{
            console.log(err)
            setMsg(err.response.data.message ? err.response.data.message : err.response.data.error)
        });
    };
    return (
        <div>
            <form>
                <h3>Register</h3>
                <label>Username</label>
                <input type="text" placeholder="Username" value={username} onChange={e=>setUserName(e.target.value)}/>
                <label>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <label>Email</label>
                <input type="text" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <button className="form-button" type="button" onClick={onSubmit}>Register</button>
                <label className="msg">{msg}</label>
                {(isRegisterd) ? <button className="form-button" type="button" onClick={()=>navigate("/login")}>Sign In</button> : ""}
            </form>
        </div>
    )
}




