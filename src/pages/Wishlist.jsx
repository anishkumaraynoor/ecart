import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';



function Wishlist() {
  const wishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  console.log(wishlist)
  const handleRemoveWishlist = (product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
  }
  return (
    <div style={{paddingTop:'100px'}}>
      <div className='container'>
        <Row className='mt-5' >
          {
            wishlist?.length>0?wishlist?.map((product,index)=>(
              <Col style={{marginBottom:'10px'}} key={index} sm={12} md={6} lg={4} xl={3} >
          <Card className='card shadow' style={{ width: '18rem'}}>
        <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
          <div className="d-flex justify-content-between mt-5">
              <button onClick={()=>dispatch(removeFromWishlist(product?.id))} className='btn btn-outline-dark'><i className="fa-solid fa-heart text-danger"></i> </button>
              <button onClick={()=>(handleRemoveWishlist(product))} className='btn btn-outline-dark'><i className="fa-solid fa-cart-plus text-success"></i> </button>
            </div>
        </Card.Body>
      </Card>
          </Col>
  
            )): 
            <div style={{height:'40vh'}} className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
          <img src="https://chus.vn/design/themes/chus/media/images/cart-empty-3x.png" alt="empty cart" />
          <h2 className='text-dark'>Your Wishlist is Empty</h2>
        </div>
            
          }
        </Row>
      </div>
       
      </div>
  )
}

export default Wishlist