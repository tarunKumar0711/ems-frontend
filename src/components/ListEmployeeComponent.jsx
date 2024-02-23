import { useEffect, useState } from "react"
import listEmployees from "../services/EmployeeService"

const ListComponent = () =>{
    const [employee, setEmployee]=useState([])
    useEffect( () => {
        listEmployees().then((response) => {
            setEmployee(response.data)
        }).catch((error) => console.log(error))
    }
    ,[])
    return (
        <div className="container">
            <h2 className="text-center"> List of Employees </h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        employee.map( employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                            )
                }
                </tbody>
               
            </table>
        </div>
    )
}

export default ListComponent