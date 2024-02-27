import { useEffect, useState } from "react"
import { listEmployees} from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const ListComponent = () =>{

    const [employee, setEmployee]=useState([])
    useEffect( () => {
        getAllEmployees()
    },[])

    const navigator = useNavigate()

    function getAllEmployees(){
        listEmployees().then( (res) =>{
            setEmployee(res.data)
        }).catch((err )=>console.log(err))
    }
    function addNewEmployee(){
        navigator('/addEmployee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

 
    return (
        <div className="container">
            <h2 className="text-center"> List of Employees </h2>
            <button className="btn btn-primary" onClick={addNewEmployee}> Add Employee</button>
            <br></br>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
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
                                <td>
                                    <button className='btn btn-info'onClick={() => updateEmployee(employee.id)}>Update</button>
                                </td>
                            </tr>
                            )
                }
                </tbody>
               
            </table>
        </div>
    )
}

export default ListComponent