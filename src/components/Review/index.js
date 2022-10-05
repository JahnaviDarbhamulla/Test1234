import React from 'react'
import {Title, Title1, Container} from './ReviewElements';
import { Button } from "../../globalStyles";
import { FormGroup, Label, Input, Select} from "./ReviewElements";

const Review = () => {
  return (
    <>
    <Title>
    <h1><strong>Step 1 : Review</ strong></h1>
    </Title>
    <Container>
    <hr style = {{ width: "65%", height: "1px" , backgroundColor: "gray", border: 'none'}} />
    </ Container>
    <Title>
    <p>Taxa details of the classified image by AI model</p>
    </Title>
    <Title>
    <p><strong>Expert comments</ strong></p>
    </Title>
    </>
  )
}
export default Review
