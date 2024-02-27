import { useState } from "react";
import { createDepartment } from "../services/DepartmentService";
import { useNavigate } from "react-router-dom";

const DepartmentComponent = () =>{
    const[departmentName, setDepartmentName] = useState('')
    const[departmentDescription, setDepartmentDescription] = useState('')

    const navigator = useNavigate()

    function saveDepartment(e){
        e.preventDefault()
        const department = {departmentName, departmentDescription}
        console.log(department)
        createDepartment(department).then((res) =>{ console.log(res.data)
                                         navigator('/departments')}).catch((err) => console.error(err))
    }

    return(
        <>
        <br></br>
        <br></br>
            <div className="container">
                <div className="row">
                     <div className="card col-md-6 offset-md-3 offset-md-3">
                        <br></br>
                        <h2 className="text-center">Add Department</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Department Name :</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="departmentName"
                                        value={departmentName}
                                        placeholder="Department's Name"
                                        onChange={(e) => setDepartmentName(e.target.value)}
                                    />
                                    <label className="form-label">Department Description :</label>
                                    <input
                                        type="text"
                                        placeholder="Department's Description"
                                        value={departmentDescription}
                                        name="departmentDescription"
                                        className="form-control"
                                        onChange={(e) => setDepartmentDescription(e.target.value)}
                                    />
                                    <br></br>
                                    <button className="btn btn-success" onClick={(e) => saveDepartment(e)}> Save Department</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepartmentComponent;