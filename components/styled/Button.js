import styled from 'styled-components'

export const Button = styled.button`
  font-family: "BigPixel";
  font-size: 1rem;
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
`
