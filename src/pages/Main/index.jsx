import React, { useState } from 'react';
import { Container, Form } from './styles';
import Title from '../../components/Title';

export default function Main() {
  const [numbersToDraw, setNumbersToDraw] = useState(1);
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);

  return (
    <Container>
      <Title>Lucky Drawer</Title>

      <Form onSubmit={() => {}}>
        <span>Sortear: </span>
        <input
          type="number"
          value={numbersToDraw}
          onChange={({ target }) => setNumbersToDraw(target.value)}
        />

        <span>Entre: </span>
        <div>
          <input
            type="number"
            value={minNumber}
            onChange={({ target }) => setMinNumber(target.value)}
          />
          <input
            type="number"
            value={maxNumber}
            onChange={({ target }) => setMaxNumber(target.value)}
          />
        </div>
      </Form>
    </Container>
  );
}
