import React from 'react'
import { useSelector } from 'react-redux'






function Cart() {
  const cart = useSelector(state=>state.cartReducer)
  return (
    <div style={{paddingTop:'100px'}}>
      {
        cart?.length>0?<div className='container'>
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
                        <td><input style={{width:'50px'}} className='form-control' value={product?.quantity} readOnly type="text" name="" id="" /></td>
                        <td>$ {product?.totalPrice}</td>
                        <td><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className='col-lg-4'></div>
          </div>
        </div>:
        <div style={{height:'40vh'}} className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
          <img src="https://chus.vn/design/themes/chus/media/images/cart-empty-3x.png" alt="empty cart" />
          <h2 className='text-dark'>Your Cart is Empty</h2>
        </div>
        
      }
      </div>
  )
}

export default Cart