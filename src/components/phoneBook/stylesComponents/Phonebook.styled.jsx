import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  padding: 20px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid rgb(61, 129, 200);
  box-shadow: 0 1px 6px 0 rgb(61, 129, 200);
  background-color: rgb(228, 227, 227);
`;

export const Title = styled.h1`
  display: flex;
  margin: 20px auto;
  margin-bottom: 30px;
  justify-content: center;
  text-transform: capitalize;
`;

export const Heading2 = styled.h3`
  display: block;
  margin: 20px auto;
  &::first-letter {
    text-transform: uppercase;
  }
`;
