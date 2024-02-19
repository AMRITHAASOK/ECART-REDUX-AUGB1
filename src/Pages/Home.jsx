import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import useFetch from '../Hooks/useFetch';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/slices/Wishlist';
import { Link } from 'react-router-dom';

function Home() {
    const data = useFetch('https://dummyjson.com/products')
    console.log(data);
    const dispatch = useDispatch()
  return (
    <div>
       <div className='banner'>
                <img src="https://static.vecteezy.com/system/resources/previews/001/183/315/non_2x/summer-sale-online-shopping-banner-vector.jpg" alt=""  width={'100%'} height={'500px'}/>
       </div>
       <div className="card">
        <Row>
           {
            data?.length>0?data?.map(item=>(
          <Col>
    <MDBCard style={{width:'300px',height:'400px'}} className='m-3 shadow'>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src={item.thumbnail} style={{width:'100%',height:'250px'}} fluid alt='...' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle className='text-center'>{item.title}</MDBCardTitle>
            <MDBCardText className='text-center'>
                Price : ${item.price}
            </MDBCardText>
            <div className='d-flex justify-content-evenly'>
         
          <Link to={'/wishlist'}>
          <button onClick={()=>dispatch(addToWishlist(item))} className='btn'><i className='fa-solid fa-heart text-danger fs-2'></i></button>
          </Link>
            
            <button className='btn'><i className='fa-solid fa-cart-plus text-success fs-2'></i></button>
            </div>
          </MDBCardBody>
                </MDBCard>
                </Col>
            )):"Not found"
           }
        </Row>
  
       </div>
    </div>
  )
}

export default Home