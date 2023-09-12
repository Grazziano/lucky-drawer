import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
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

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

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
  }

  button {
    padding: 10px 20px;
    border: 0;
    border-radius: 4px;
    font-size: 15px;
    background: #310A31;
    /* background: #88B7B5; */
    color: #fff;
  }

  button:hover {
    opacity: 0.8;
  }
`;
