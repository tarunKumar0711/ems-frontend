import { useEffect, useState } from "react"
import { listDepartments } from "../services/DepartmentService"

const DepartmentListComponent = () =>{

    const [departments, setDepartment] = useState([])

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

    return(
        <>
            <div className="container">
                <h2 className="text-center">Department List</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Department Id</th>
                            <th>Department Name</th>
                            <th>Department Description</th>
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