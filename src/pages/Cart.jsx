


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, inQuantity, removeCartItem } from '../redux/slices/cartSlice'
import Header from '../components/Header'





function Cart() {
  const cart = useSelector(state=>state.cartReducer)
  const [totalCartAmount,setTotalCartAmount] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(cart?.length>0){
      setTotalCartAmount(cart?.map(item=>item.totalPrice).reduce((p1,p2)=>p1+p2))
    }
  },[cart])
  const handleCheckout = ()=>{
    alert("Order placed successfully... Thank you for shopping with us")
    dispatch(emptyCart())
    navigate('/')
  }
  const handleDecrement = (product)=>{
    if(product.quantity==1){
      dispatch(removeCartItem(product.id))
    }else{
      dispatch(decQuantity(product))
    }
  }
  return (
    <div>
      <Header></Header>
      <div style={{paddingTop:'100px'}}>
        {
          cart?.length>0?<div className='container pt-5'>
            <h1>Cart Summary</h1>
            <div className='row mt-5'>
              <div className='col-lg-8'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                      cart?.map((product,index)=>(
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{product?.title}</td>
                          <td><img width={'60px'} height={'60px'} src={product?.thumbnail} alt="No Image" /></td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <span onClick={()=>handleDecrement(product)} style={{cursor:'pointer'}} className='btn fw-bolder'>-</span>
                              <input style={{width:'50px'}} className='form-control' value={product?.quantity} readOnly type="text" name="" id="" />
                              <span onClick={()=>dispatch(inQuantity(product))} style={{cursor:'pointer'}} className='btn fw-bolder'>+</span>
                              </div>
                            </td>
                          <td>$ {product?.totalPrice}</td>
                          <td><button onClick={()=>{dispatch(removeCartItem(product?.id))}} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <div className='float-end mt-3'>
                  <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3'>Empty Card</button>
                  <Link to={'/'} className='btn btn-success'>Shop More</Link>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className="shadow border rounded p-4">
                  <h5>Total Products: <span className='fw-bolder text-danger'>{cart?.length}</span></h5>
                  <h4>Total Amount: <span className='fw-bolder text-danger'>{totalCartAmount}</span></h4>
                  <br />
                  <div className="d-grid mt-4">
                    <button onClick={handleCheckout} className='btn btn-success'>Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>:
          <div style={{height:'40vh'}} className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
            <img src="https://chus.vn/design/themes/chus/media/images/cart-empty-3x.png" alt="empty cart" />
            <h2 className='text-dark'>Your Cart is Empty</h2>
          </div>
          
        }
        </div>
    </div>
  )
}

export default Cart