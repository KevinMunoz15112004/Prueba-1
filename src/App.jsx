import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import FAQ from './components/FAQ/FAQ'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Register from './components/Register/Register'
import Services from './components/Services/Services'
import Login from './components/Login/Login'
import Contacts from './components/Contacts/Contacts'
import Download from './components/Download/Download'
import { useEffect } from 'react'
import { authFirebase } from './firebase'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CRUD from './components/CRUD/CRUD.JSX'

function App() {

  const [user, setUser] = useState("")

  useEffect(() => {
    authFirebase.onAuthStateChanged((user)=>{
      setUser(user)
    })
  }, [])

  return (
    <>
    <BrowserRouter>
    <Navbar user={user}/>
      <Routes>
        <Route path='/download' element={<Download/>}/>
        <Route path='/login' element={user ? <Navigate to='/services'/> : <Login/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/register' element={user ? <Navigate to='/services'/> :<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/crud' element={user ? <CRUD/> : <Navigate to='/login'/>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    <Footer/>
    </>
  )
}

export default App
