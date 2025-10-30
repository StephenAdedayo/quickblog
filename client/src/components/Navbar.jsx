import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {

    const {navigate, token, setToken} = useAppContext()
    

  return (
    <nav className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
      <img onClick={() => navigate("/")} src={assets.logo} alt="logo"  className='w-32 cursor-pointer sm:w-44'/>
      <button onClick={() => navigate('/admin') } className='flex group items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'> {token ? "Dashboard" : "Login"}
        <img src={assets.arrow} alt="arrow" className='w-3 group-hover:-rotate-90 transition-transform duration-500 ease-in cursor-pointer'/>
      </button>
    </nav>
  )
}

export default Navbar
