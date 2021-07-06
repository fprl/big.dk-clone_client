import styled from 'styled-components'

export const Button = styled.button`
  font-family: "BigPixel";
  font-weight: bold;
  text-transform: uppercase;

  color: ${p => p.isActive ? '#ff0000' :  'initial'};
  background-color: initial;
  padding: 0 1rem;
  border: 0px solid white;
  
  cursor: pointer;


  :hover {
    color: #ff0000
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1068px) {
    font-size: 1.1rem;
  }
`
