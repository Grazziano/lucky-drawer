import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  margin: 80px auto;
`;

export const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: 0;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }

  /* @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  } */
`;
