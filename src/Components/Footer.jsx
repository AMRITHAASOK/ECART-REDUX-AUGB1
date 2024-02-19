import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRipple
  } from 'mdb-react-ui-kit';
  
function Footer() {
  return (
    <div><MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
    <MDBContainer className='p-4'>
      <section className=''>
        <MDBRow>
          <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
            <MDBRipple
              rippleColor='light'
              className='bg-image hover-overlay shadow-1-strong rounded'
            >
              <img src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/677794/47/mod01/fnd/IND/fmt/png/Small-Logo-Men' className='w-100' />
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
            <MDBRipple
              rippleColor='light'
              className='bg-image hover-overlay shadow-1-strong rounded'
            >
              <img src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/680800/02/mod01/fnd/IND/fmt/png/Active-Big-Logo-Men' className='w-100' />
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
            <MDBRipple
              rippleColor='light'
              className='bg-image hover-overlay shadow-1-strong rounded'
            >
              <img src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/680817/01/mod01/fnd/IND/fmt/png/Men' className='w-100' />
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
            <MDBRipple
              rippleColor='light'
              className='bg-image hover-overlay shadow-1-strong rounded'
            >
              <img src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/658953/13/mod01/fnd/IND/fmt/png/PUMA-x-NEYMAR-JR-Creativity-Men' className='w-100' />
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
            <MDBRipple
              rippleColor='light'
              className='bg-image hover-overlay shadow-1-strong rounded'
            >
              <img src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/624071/90/mod01/fnd/IND/fmt/png/PUMA-x-PERKS-AND-MINI-Unisex-T-shirt' className='w-100' />
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
            <MDBRipple
              rippleColor='light'
              className='bg-image hover-overlay shadow-1-strong rounded'
            >
              <img src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/658347/01/mod01/fnd/IND/fmt/png/KING-Pro-Men' className='w-100' />
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2024 Copyright:
      <a className='text-white' href='/'>
       shopnshop.com
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer