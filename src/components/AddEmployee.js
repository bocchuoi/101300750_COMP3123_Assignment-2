
import React from 'react';
import "./css/form.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddEmployee(props) {
    const navigate = useNavigate();

    const [firstName, setFirstName] = React.useState("");    
    const [lastName, setLastName] = React.useState("");  
    const [email, setEmail] = React.useState("");  
    const [gender, setGender] = React.useState("");  
    const [salary, setSalary] = React.useState("");  
    const [msg, setMsg] = React.useState("");  

    const onSubmit = async (e) => {


        await axios.post(`${props.serverIp}/api/emp/employees`, {firstName:firstName, lastName:lastName, email:email, gender:gender, salary:salary}, {
        }).then((res)=>{
            console.log(res);
            setMsg(res.data.msg);
        })
        .catch((err)=>{
            console.log(err)
            setMsg(err.response.data.message ? err.response.data.message: err.response.data.error)
        });
    };
    return (
        <div>
            <form>
                <h3>Add Employee</h3>
                <label>First Name</label>
                <input type="text" placeholder="First Name" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" value={lastName} onChange={e=>setLastName(e.target.value)}/>
                <label>Email</label>
                <input type="text" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <label>Gender</label>
                <input type="text" placeholder="(male/female/other)" value={gender} onChange={e=>setGender(e.target.value)}/>
                <label>Salary</label>
                <input type="text" placeholder="Salary" value={salary} onChange={e=>setSalary(e.target.value)}/>
                <button className="form-button" type="button" onClick={onSubmit}>Add</button>
                <label className="msg">{msg}</label>
            </form>
        </div>
    )
}




