import React from 'react'
import links from "../utils/links";
import { NavLink } from "react-router-dom";
const NavLinks = ({toggleSidebar}) => {
  return (
    <div className="nav-links">
             {links.map((link) => {
              const { path, icon, text, id } = link;
              return (
                <NavLink to={path} key={id} onClick={toggleSidebar} className={({isActive})=>isActive?'nav-link active':'nav-link'}>
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })} 
          </div>
  )
}

export default NavLinks
