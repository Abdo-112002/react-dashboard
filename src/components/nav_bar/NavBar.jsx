

import React , {memo} from 'react'
import { Container, Navbar } from 'react-bootstrap';
function NavBar() {
    console.log("navbar");
  return (
    <Navbar  style={{position : "sticky" , top : "0", zIndex : "1", background : "#fff" , color : "#F1F1F1" , boxShadow: "1px 2px 4px rgb(0 0 0 / 12%)"}}>
        <Container>
        <Navbar.Brand href="#home">
            DashBoard
        </Navbar.Brand>
        <Navbar.Brand>
            <img
              src='../images/product-1.jpg'
              alt="hello"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{borderRadius : "15px"}}
            />{' '}
            {'Abdelrahman'}
        </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default memo(NavBar);
