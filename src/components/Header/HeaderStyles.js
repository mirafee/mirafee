import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`
export const Button = styled.button`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border-radius: 10%;
  padding: 8px 20px;
  margin: 5px;
  transition: 0.2s;
  &:hover {
  color: rgb(20, 20, 20);
  background-color: #fff;
}
  }`

  export const Label = styled.label`
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
  &:focus ~ label {
    top:-20px;
    font-size:14px;
    color:#5264AE;
  }
  &:valid ~ label {
    top:-20px;
    font-size:14px;
    color:#5264AE;  
  }`
export const Section = styled.section`
margin: 0;
width: 100%;
height: 100vh;
background: #086d99;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
place-items: center;
overflow: hidden;
font-family: poppins;`
export const formContainer = styled.div`
position: relative;
width: 100vw;
height: 100vh;
border-radius: 20px;
padding: 40px;
box-sizing: border-box;
background: #ecf0f3;
box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`
export const formContainer2 = styled.div`
height: 100px;
width: 100px;
background: url("https://www.shutterstock.com/image-vector/www-flat-icon-single-high-quality-1740083504");
margin: auto;
border-radius: 50%;
box-sizing: border-box;
box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
`
export const formContainer3 = styled.div`
margin-top: 10px;
font-weight: 900;
font-size: 1rem;
color: #1DA1F2;
letter-spacing: 1px;
`
export const formInputs = styled.div`
text-align: left;
margin-top: 30px;
`
export const formLabel = styled.label`
margin-bottom: 4px;
display: block;
width: 10%;
padding: 0;
border: none;
outline: none;
box-sizing: border-box;
`
export const Input = styled.input`
margin-bottom: 4px;
width: 100vh;
border: none;
outline: none;
box-sizing: border-box;
padding-left: 20px;
height: 50px;
font-size: 14px;
border-radius: 50px;
box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
font-size: 18px;
padding: 10px;
margin: 10px;
background: #ecf0f3;
::placeholder {
color: black;}
`
