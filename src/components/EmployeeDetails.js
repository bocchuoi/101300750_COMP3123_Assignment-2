
import React, { useEffect } from 'react';
import "./css/form.css";
import { useNavigate, useLocation } from 'react-router-dom';

export default function EmployeeDetails(props) {
    const location = useLocation();
    const emp = location.state;
    const nav = useNavigate()
    return (
        <div>
            <form>
                <h3>Employee Details</h3>
                <label>First Name</label>
                <input type="text" placeholder="First Name" value={emp.firstName} readonly/>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" value={emp.lastName} readonly/>
                <label>Email</label>
                <input type="text" placeholder="Email" value={emp.email} readonly/>
                <label>Gender</label>
                <input type="text" placeholder="(male/female/other)" value={emp.gender} readonly/>
                <label>Salary</label>
                <input type="text" placeholder="Salary" value={emp.salary} readonly/>
                <button className="form-button" type="button" onClick={()=>nav("/employees")}>Back To Employee List</button>
            </form>
        </div>
    )
}




