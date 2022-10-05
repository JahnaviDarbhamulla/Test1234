import React from 'react'
import {Title, Title1, Container} from './UploadElements'
import { Button } from "../../globalStyles";



const Upload = () => {
  return (
    <>

    <Title>
    <p><strong>Step 1</ strong></p>
    </Title>
    <Container>
    <hr style = {{ width: "65%", height: "1px" , backgroundColor: "gray", border: 'none'}} />
    </ Container>
    <Title>
    <p><strong>Images Upload</ strong></p>
    </ Title>
    <Container>
    <img style={{ width: "65%", height: "auto"}} src={require('../../images/Upload.png')} alt="upload" />
    </ Container>
    <Title>
    <Button fontBig big>Proceed</Button>
    </Title>
    </>
  )
}
export default Upload
