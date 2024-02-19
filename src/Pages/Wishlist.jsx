import React from 'react'
import store from '../Redux/store'
import { Store } from '@reduxjs/toolkit'
import { addToWishlist } from '../Redux/slices/Wishlist'
import {wishlistReducer} from '../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
function Wishlist() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
 
  return (
    <div>
      {
        wishlistArray?.length>0? wishlistArray.map(item=>(
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
            <button  className='btn'><i className='fa-solid fa-heart text-danger fs-2'></i></button>
            <button className='btn'><i className='fa-solid fa-cart-plus text-success fs-2'></i></button>
            </div>
          </MDBCardBody>
                </MDBCard>

        )):"Empty wishlist"
      }

    </div>
  )
}

export default Wishlist