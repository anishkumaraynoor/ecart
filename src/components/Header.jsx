import React, { useEffect, useState } from 'react'





import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector(state=> state.wishlistReducer)
  const cart = useSelector(state=>state.cartReducer)
 
  return (
    <Navbar style={{zIndex:1}} expand="lg" className="bg-info w-100 position-fixed">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none', color:'white'}} className='fw-bolder'><i class="fa-solid fa-truck me-2"></i>Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}><i className='fa-solid fa-heart text-danger'></i> Wishlist <Badge className='bg-dark'>{wishlist?.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'} style={{textDecoration:'none', color:'white'}}><i className='fa-solid fa-cart-plus text-success'></i> Cart <Badge className='bg-dark'>{cart?.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header