import './App.css'
import EmployeeComponent from './components/EmployeeDetails'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
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
          {/* http://localhost:5173/employees/ */}
          <Route path="/employees" element={<ListComponent/>}></Route>
          <Route path="/addEmployee" element={<EmployeeComponent/>}></Route>
        </Routes>
        
        <FooterComponent/>
      </BrowserRouter>
       
    </>
  )
}

export default App
