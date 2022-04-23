import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'
import Dasboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Profil from "../pages/Profil"
import NewBlog from "../pages/NewBlog"

const AppRouter = () => {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dasboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="/newblog" element={<NewBlog/>}/>

      </Routes>
    </Router>
  )
}

export default AppRouter