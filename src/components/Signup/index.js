import React from 'react'
import {Title, Content} from './SignupElements'
import { FormGroup, Label, Input, Message, Line } from "./SignupElements";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



const Signup = () => {
  return (
    <>
    <Title>
    <p>Login</p>
    </Title>
    <FormGroup>
      <Input id="label" placeholder="enter email id" />
      <button type="button" class="btn btn-outline-primary" disabled>Next</button>
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
