import styled from 'styled-components'

export const Title = styled.h1`
font-family: nunito-sans, sans-serif;
text-align: center;
color: #DCD3E9;
display: flex;
flex-direction: left;
margin-left: 5.5em;
margin-top: 100px;
`;



export const FormGroup = styled.div`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #9B9B9B;
  margin-left:-27em;
    display: block;
`;


export const Input = styled.input`
 font-family: nunito-sans, sans-serif;
 text-align: left;
 font-sze:1.5em;

 color: #DCD3E9;
	padding: 0.5em;
	color: #9B9B9B;
	width: 100%;
  margin-left:-32.9em;
	margin-bottom: 0.5em;
  background: transparent;
  border: none;
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #DCD3E9;
  font-size:1.4em;
`;

export const Line = styled.div`
display: flex;
flex-direction: left;
margin-left:-27em;
width: 400px;
height: 5px;
background-color: #3699FB;
background-image: -o-linear-gradient(left, #3699FB 0%, #FFACF2 73%);
background: linear-gradient(to right, #3699FB 0%, #FFACF2 73%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="$from", endColorstr="$to",GradientType=1 );


`;

export const Message = styled.label`
	margin-top: 1.5em;
  margin-left:-27em;
	color: #9B9B9B;
    display: block;
`;
