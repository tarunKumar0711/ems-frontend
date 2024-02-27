import './App.css'
import DepartmentComponent from './components/DepartmentComponent'
import EmployeeComponent from './components/EmployeeDetails'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import DepartmentListComponent from './components/ListDepartmentComponent'
import ListComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* http://localhost:5173/ */}
          <Route path="/" element={<ListComponent/>}></Route>
          {/* http://localhost:5173/employees */}
          <Route path="/employees" element={<ListComponent/>}></Route>
          {/* http://localhost:5173/addEmployee */}
          <Route path="/addEmployee" element={<EmployeeComponent/>}></Route>
          {/* http://localhost:5173/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
          {/* http://localhost:5173/employees/ */}
          <Route path='/departments' element={<DepartmentListComponent/>}></Route>
          {/* http://localhost:5173/addDepartment */}
          <Route path='/addDepartment' element={<DepartmentComponent/>}></Route>
          {/* http://localhost:5173/edit-department/1 */}
          <Route path='/edit-department/:id' element={<DepartmentComponent/>}></Route>
        </Routes>
        
        <FooterComponent/>
      </BrowserRouter>
       
    </>
  )
}

export default App
