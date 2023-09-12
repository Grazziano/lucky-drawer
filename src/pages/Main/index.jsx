import React, { useState } from 'react';
import { Container, Form } from './styles';
import Title from '../../components/Title';

export default function Main() {
  const [numbersToDraw, setNumbersToDraw] = useState(1);
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('test');
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
    </Container>
  );
}
