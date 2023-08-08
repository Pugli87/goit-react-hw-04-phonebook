import styled from 'styled-components';

export const ContInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactItems = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-around;
  border-bottom: 1px dashed rgb(61, 129, 200);
  /*&:last-child {
    margin-bottom: 20px;
  }*/
`;

export const ContactName = styled.span`
  width: 200px;
  font-size: 1rem;
`;

export const ContactNumber = styled.span`
  font-size: 1rem;
`;
export const ContBotton = styled.div``;

export const Button = styled.button`
  cursor: pointer;
  padding: 3px 10px;
  font-size: 1 rem;
  margin-left: 20px;
  border: none;
  border-radius: 15px;
  text-transform: capitalize;
  background-color: rgb(61, 129, 200);
  box-shadow: 0 1px 6px 0 #20212447;

  &:hover {
    color: lightgray;
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    outline: 1px solid rgb(61, 129, 200);
  }

  &:focus {
    box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
    outline: 1px solid rgb(61, 129, 200);
  }
`;

export const Ul = styled.ul`
  width: 280px;
`;
