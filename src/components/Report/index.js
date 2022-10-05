import React from 'react'
import {Title, Title1, Container} from './ReportElements';
import { Button } from "../../globalStyles";
import { FormGroup, Label, Input, Select} from "./ReportElements";

const Report = () => {
  return (
    <>
    <br /> <br />
    <div class="container-fluid" style = {{ width: "80%" , border: 'none'}}>
    <div class="container text-center">
    <div class="row row-cols-4">
    <div class="col">    <img src={require('../../images/aivara_logo.png')} alt="Aivara Logo" />
</div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"><button type="button" class="btn btn-outline-primary" disabled>Download</button></div>
  </div>
</div>
    </div>
    <Container>
    <hr style = {{ width: "65%", height: "1px" , backgroundColor: "#395D89", border: 'none'}} />
    </ Container>
    <div class="container-fluid" style = {{ width: "65%", paddingTop: "50px",  paddingBottom: "50px" , backgroundColor: "#EAF0FB", border: 'none'}}>
    <div class="container text-center">
    <div class="row">
      <div class="col">
        Company/Entity :
      </div>
      <div class="col">
        Location :
      </div>
    </div>
    <br />
    <div class="row">
    <div class="col">
      Timestamp :
      </div>
    <div class="col">
      Type of Sample :
    </div>
    </div>
    </div>
    </div>
    <br /><br />
    <div class="container-fluid" style = {{ width: "65%",height:"200px", paddingTop: "20px" , backgroundColor: "#F0E6FE", border: 'none'}}>
    <div class="container text-center">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Taxa Details</div>
    <div class="col">Count of Images</div>
    <div class="col">Count of taxa</div>
    <div class="col">Relative Abundance</div>
    </div>
    </div>
    </div>

    <Title>
    <p><strong>Annotation Image</ strong></p>
    </Title>
    <Title>
    <p>Image : </p>
    </Title>
    </>
  )
}
export default Report
