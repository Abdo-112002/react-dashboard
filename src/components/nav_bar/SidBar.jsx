

import React , {memo} from 'react'
import { Nav } from 'react-bootstrap'

import {NavLink} from 'react-router-dom'

function SidBar() {

    console.log("sidBar");
    const isActive = ({isActive}) => {
        return {
            color : isActive ? '#232426'  : '#727475',
            fontWeight : isActive ? 'bold'  : 'normal',
            textDecoration : "none",
        }
    }
    

  return (
    <Nav  className="flex-column p-5 " style={{width :"200px", height : "calc(100vh - 56px)", position :"sticky" , left : "0" , top : "56px",background : "#fff",boxShadow: "0px 1px 4px 1px rgb(0 0 0 / 12%)"}}>
      <NavLink to="products" style={isActive}>All Product</NavLink>
      <br/>
      <NavLink to="new_products" style={isActive}>Add Product</NavLink>
    </Nav>
  )
}

export default memo(SidBar);
