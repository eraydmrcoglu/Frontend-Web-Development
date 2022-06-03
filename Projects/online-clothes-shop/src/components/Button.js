import styled from 'styled-components';

export const Button = styled.button`
  display: none;
  background: ${(props) => {
    if (props.green) {
      return "#BDE124";
    } else if (props.red) {
      return "#ff050d";
    } else {
      return "#37D324";
    }
  }};
  border-radius: 5px;
  color: #626262;
  font-size: 22px;
  font-weight: bold;
  border: none;
  width: 80%;
  margin: 0.5rem auto;
  padding: 0.5rem 0;
  &:hover {
    opacity: 0.8;
  }
`;