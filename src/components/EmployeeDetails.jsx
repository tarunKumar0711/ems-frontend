import { useState } from "react"
import { createEmployee } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const EmployeeComponent = () =>{
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[email,setEmail] = useState('')

    const navigator = useNavigate()

    const [errors, setErrors]  = useState({
        firstName:'',
        lastName:'',
        email:''
    })

    function saveEmployee(e){
        e.preventDefault()

        if(validateForm()){
            const employee = {firstName, lastName, email}
            console.log(employee)

            createEmployee(employee).then( (res) => {
             console.log(res);
            navigator('/employees')
            })
        }        // console.log(employee)
    }

      function validateForm(){
        let valid =true;

        const errorCopy = {...errors}

        if(firstName.trim()){
            errorCopy.firstName=''
        }else{
            errorCopy.firstName="Invalid First Name"
            valid=false;
        }

        if(lastName.trim()){
            errorCopy.lastName=''
        }else{
            errorCopy.lastName="Invalid Last Name"
            valid =false
        }

        if(email.trim()){
            errorCopy.email=''
        }else{
            errorCopy.email="Invalid Email"
            valid =false
        }

        setErrors(errorCopy)
        return valid
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
                                        className={`form-control ${ errors.firstName ? 'is-invalid' : '' }`}
                                    />{ errors.firstName && <div className="invalid-feedback">{errors.firstName}</div> }
                                    <label className="form-label">Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Last Name"
                                        value={lastName}
                                        name="lastName"
                                        className={`form-control ${errors.lastName ? 'is-invalid' : ' '}`}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {errors.lastName && <div className="invalid-feedback">{errors.lastName} </div>}
                                    <label className="form-label">Email :</label>
                                    <input
                                        type="email"
                                        placeholder="email@abc.com"
                                        value={email}
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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