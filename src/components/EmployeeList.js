import { useEffect } from "react"
import React from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function EmployeeList(props) {
    const navigate = useNavigate();
    const [employees, setEmployees] = React.useState([{}]);

    useEffect(() => {
        axios.get(`${props.serverIp}/api/emp/employees`)
        .then(res=>{
            console.log(res.data);
            setEmployees(res.data)
        })
        .catch(e=>console.log(e))
    }, []);

    const deleteUser = (empId) => {
        axios.delete(`${props.serverIp}/api/emp/employees?=eid=${empId}`)
        .then(res=>{
            console.log(res)
        })
    }

    const goToUpdatePage = (emp) => {
        navigate("/updateEmployee", {state: emp})
    }

    const viewEmployee = (emp) => {
        navigate("/employeeDetails", {state: emp})
    }

    const goBack = () => {
        navigate("/employees");
    }

    return (
        <div>
            <button className="form-button"><a href="/addEmployee">Add employee</a></button>
            <label className="msg"></label>
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp=>{
                        return (
                        <tr>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button className="btn btn-info" onClick={()=>{goToUpdatePage(emp)}}>Update</button>
                                <button className="btn btn-info" onClick={()=>{deleteUser(emp._id)}}>Delete</button>
                                <button className="btn btn-info" goBack={goBack} onClick={()=>{viewEmployee(emp)}}>View</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}