import React from 'react'
import {Success_img, Details} from './SuccessElements'


const Success = () => {
  return (
    <>
    <Success_img>
    <img src={require('../../images/successful.png')} alt="Success" />
    </Success_img>
    <Details>
    <p>You have successfully verified
                  your email.</p>
    </Details>
      </>
  )
}
export default Success
