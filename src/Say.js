import React, { useState } from 'react';

function Say() {
  const [message, setMessage] = useState('');

  const onClickEnter = () => {
    return setMessage('안녕하세요!');
  };
  const onClickLeave = () => {
    return setMessage('안녕히 가세요!');
  };

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: 'red' }}
        onClick={() => {
          return setColor('red');
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: 'green' }}
        onClick={() => {
          return setColor('green');
        }}
      >
        초록색
      </button>
      <button
        style={{ color: 'blue' }}
        onClick={() => {
          return setColor('blue');
        }}
      >
        파란색
      </button>
    </div>
  );
}

export default Say;
