import styled from 'styled-components';

export const Input = styled.input`
  outline: 0;
  width: 250px;
  border: none;
  padding: 6px 0 6px 20px;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 15px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0 1px 6px 0 #20212447;

  &:focus {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    border: 1px solid rgb(61, 129, 200);
  }
`;
