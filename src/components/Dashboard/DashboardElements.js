import styled from 'styled-components'

export const Title = styled.p`
font-family: nunito-sans, sans-serif;
text-align: center;
color:  #395D89 ;
margin-top: 3em;
margin-bottom: 1em;
display: flex;
flex-direction: left;
margin-left: 17em;

`;
export const Title1 = styled.div`
display: block;
justify-content: flex-end;


`;

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;

`;

const Button = styled.button`

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const FormGroup = styled.div`
margin-left: 17em;

`;

export const Label = styled.label`
font-family: nunito-sans, sans-serif;


`;

export const Input = styled.input`

  text-align : center;
  left: 25%; position: relative;



`;
export const Select = styled.select`
  width: 30%;
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  justify-content:center;
  align-items:center;


  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  `
