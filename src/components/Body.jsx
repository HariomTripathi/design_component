import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUserData } from '../utils/userReducer'

const Body = () => {
    
  return (
    <div className='h-[80vh]'>
        <p>this is body</p>
    </div>
  )
}

export default Body