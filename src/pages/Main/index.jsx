import React, { useState } from 'react';
import { Container, DivNumbers, Form, Number } from './styles';
import Title from '../../components/Title';

export default function Main() {
  const [numbersToDraw, setNumbersToDraw] = useState(1);
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);
  const [list, setList] = useState([]);

  function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = [];

    for (let index = 0; index < numbersToDraw; index++) {
      const n = Math.floor(Math.random() * maxNumber);
      if (!data.includes(n)) {
        data.push(n);
      } else {
        index--;
      }
    }

    setList(data);
  }

  return (
    <Container>
      <Title>Lucky Drawer</Title>

      <Form onSubmit={handleSubmit}>
        <div>
          <span>Sortear</span>
          <input
            type="number"
            value={numbersToDraw}
            onChange={({ target }) => setNumbersToDraw(target.value)}
          />
          <span>número{numbersToDraw > 1 ? 's' : ''}</span>
        </div>

        <div>
          <span>Entre</span>
          <input
            type="number"
            value={minNumber}
            onChange={({ target }) => setMinNumber(target.value)}
          />
          <span>e</span>
          <input
            type="number"
            value={maxNumber}
            onChange={({ target }) => setMaxNumber(target.value)}
          />
        </div>

        <button type="submit">Sortear</button>
      </Form>

      <DivNumbers>
        {list.length > 0 &&
          list.map((item, index) => (
            <Number key={index}>
              <span>{item}</span>
            </Number>
          ))}
      </DivNumbers>
    </Container>
  );
}
