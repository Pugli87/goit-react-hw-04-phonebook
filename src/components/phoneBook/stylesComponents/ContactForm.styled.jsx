import styled from 'styled-components';

export const Form = styled.form`
  width: 280px;
  border: none;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 20px
  border-radius: 15px;
`;

export const Input = styled.input`
  margin: 0 auto;
  width: 250px;
  padding: 6px 0 6px 20px;
  margin-bottom: 30px;
  border-radius: 15px;
  border: 1px solid gray;
  outline: 0;
  background-color: white;
  box-shadow: 0 1px 6px 0 #20212447;

  &:focus {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    border: 1px solid rgb(61, 129, 200);
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  background-color: transparent;
  border: none;
  padding: 3px 15px;
  border-radius: 15px;
  text-transform: capitalize;
  background-color: rgb(61, 129, 200);
  box-shadow: 0 0 5px gray;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    outline: 1px solid rgb(61, 129, 200);
    color: lightgray;
  }

  &:focus {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    outline: 1px solid rgb(61, 129, 200);
  }
`;

export const SubTitle = styled.h3`
  text-align: center;
  margin-bottom: 40px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Text = styled.h3`
  margin: 0 auto;
  font-weight: 400;
  margin-left: 35px;
  margin-bottom: 10px;
  text-transform: capitalize;
`;
