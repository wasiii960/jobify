import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import {FaAlignLeft,FaUserCircle,FaCaretDown} from 'react-icons/fa'
import {Logo} from '../components'
import { useAppContext } from '../context/appContext'
const Navbar = () => {
    const [showLogout, setShowLogout] = useState()
    const {toggleSidebar,user,logoutUser} = useAppContext();
  return (
    <Wrapper>
        <div className='nav-center'>
            <button className='toggle-btn' onClick={toggleSidebar}>
                <FaAlignLeft/>
            </button>
            <div>
                <Logo/>
                <h3 className='logo-text'>dashboard</h3>
            </div>
            <div className='btn-container'>
                <button className='btn' type='button' onClick={()=>setShowLogout(!showLogout)}>
                    <FaUserCircle/>
                    {user && user.name}
                    <FaCaretDown/>
                </button>
                
            <div className={showLogout?'dropdown show-dropdown':'dropdown'}>
                <button type='button' className='dropdown-btn' onClick={logoutUser}>
                    logout
                </button>
            </div>
            </div>
        </div>
    </Wrapper>
 )
}

export default Navbar
