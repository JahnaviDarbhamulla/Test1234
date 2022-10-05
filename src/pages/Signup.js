import React from 'react'
import {Title, Content} from './SignupElements'
import { FormGroup, Label, Input, Message, Line } from "./SignupElements";


const Signup = () => {
  return (
    <>
    <Title>
    <p>Login</p>
    </Title>
    <FormGroup>
      <Input id="label" placeholder="enter email id" />
    
      <Line></Line>
      <Message>we will send a secure magic link to the email address</Message>
    </FormGroup>

      </>
    // <Content>
    // <hr />
    // </Content>

  )
}
export default Signup
