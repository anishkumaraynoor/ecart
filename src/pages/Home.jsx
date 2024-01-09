import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import { Col, Row, Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  
  return (
    <div style={{paddingTop:'100px'}}>
      {
      loading?<div className='mt-5 text-center'><Spinner animation="grow" variant="primary" />Loading...</div>:
      <Row className='m-5'>
        {allProducts?.length>0 && allProducts.map((product,index)=>(
          <Col key={index} className='mb-3' sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
          <Card.Body>
            <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
            <div className='text-center'><Link to={`/view/${product?.id}`} className=''>View More</Link></div>
          </Card.Body>
        </Card>
          </Col>
        ))}
      
      </Row>
    }
    </div>
    
  )
}

export default Home