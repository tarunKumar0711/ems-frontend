import { useState } from "react"
import { createEmployee } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const EmployeeComponent = () =>{
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[email,setEmail] = useState('')

    const navigator = useNavigate()

    function saveEmployee(e){
        e.preventDefault()
        const employee = {firstName, lastName, email}

        createEmployee(employee).then( (res) => {
             console.log(res);
            navigator('/employees')
        }
           
        )
        
        // console.log(employee)
    }
    return(
        <>
        <br></br>
        <br></br>
            <div className="container">
                <div className="row"> 
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Add Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter First Name"
                                        value={firstName}
                                        name="firstName"
                                        onChange={ (e) => setFirstName(e.target.value)}
                                        className="form-control"
                                    />
                                    <label className="form-label">Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Last Name"
                                        value={lastName}
                                        name="lastName"
                                        className="form-control"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <label className="form-label">Email :</label>
                                    <input
                                        type="email"
                                        placeholder="email@abc.com"
                                        value={email}
                                        name="email"
                                        className="form-control"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className="btn btn-success" onClick={saveEmployee}>Save Employee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeComponent