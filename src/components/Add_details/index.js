import React from 'react'
import {Title, Title1, Container} from './Add_detailsElements';
import { Button } from "../../globalStyles";
import { FormGroup, Label, Input, Select} from "./Add_detailsElements";



const Add_Details = () => {
  return (
    <>
    <Title>
    <p><strong>Step 1</ strong></p>
    </Title>
    <Container>
    <hr style = {{ width: "65%", height: "1px" , backgroundColor: "gray", border: 'none'}} />
    </ Container>
    <Title>
    <p><strong>Add Details</ strong></p>
    </ Title>
    <FormGroup>
      <Label htmlFor="label">Company/Entity Name</Label>
      <Input id="label" />
    </FormGroup>
    <FormGroup>
      <Label>Your Name</Label>
      <Input />
    </FormGroup>
    <FormGroup>
      <Label>Contact Number</Label>
      <Input />
    </FormGroup>
    <Container>
    <hr style = {{ width: "65%", height: "1px" , borderTop: "3px dotted"}} />
    </ Container>

    <FormGroup>
      <Label>Location</Label>
      <Select>
      <option value="" hidden>
         Type
       </option>
       <option value="1">Audi</option>
       <option value="2">BMW</option>
       <option value="3">Citroen</option>
       <option value="4">Ford</option>
     </Select>
    </FormGroup>
    <FormGroup>
      <Label>Type of Sample</Label>
      <Select>
      <option value="" hidden>
         Type
       </option>
       <option value="1">Audi</option>
       <option value="2">BMW</option>
       <option value="3">Citroen</option>
       <option value="4">Ford</option>
     </Select>
    </FormGroup>
    <FormGroup>
      <Label>Contact Number</Label>
      <Input />
    </FormGroup>
    <Title>
    <Button fontBig big>Proceed</Button>
    </Title>
    </>
  )
}
export default Add_Details
