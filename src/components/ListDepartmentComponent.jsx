import { useEffect, useState } from "react"
import { listDepartments, removeDepartment} from "../services/DepartmentService"
import { useNavigate } from "react-router-dom"

const DepartmentListComponent = () =>{

    const [departments, setDepartment] = useState([])
    const navigator = useNavigate()

    useEffect(
        ()=>{
            getAllDepartments()
        },[])

    function getAllDepartments(){
        listDepartments().then((res) =>{
            console.log(res.data)
            setDepartment(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }

    function addDepartment(){
        navigator('/addDepartment')
    }

    function updateDepartment(id){
        navigator(`/edit-department/${id}`)
    }

    function deleteDepartment(id){
        removeDepartment(id).then((res)=>{
            console.log(id)
            console.log(res.data)
            getAllDepartments()
        }).catch((err)=>{
            console.error(err)
        })
    }
    return(
        <>
            <div className="container">
                <br></br>
                <br></br>
                <h2 className="text-center">Department List</h2>
                
                <button className="btn btn-primary" style={{margin:'10px'}} onClick={addDepartment}>Add Department</button>
                
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Department Id</th>
                            <th>Department Name</th>
                            <th>Department Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departments.map( (department) =>{ 
                                return(
                                     <tr key={department.id}>
                                        <td>{department.id}</td>
                                        <td>{department.departmentName}</td>
                                        <td>{department.departmentDescription}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => updateDepartment(department.id)}>Update</button>
                                            <button className="btn btn-danger" onClick={() => deleteDepartment(department.id)} style={{marginLeft:'10px'}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DepartmentListComponent