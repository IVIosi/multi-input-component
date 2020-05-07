import React from 'react';

export default function InputRow({ onInput, onChange, onRemove, isLastField }) {
  const handleInput = (e) => {
    if (typeof onInput === 'function') {
      onInput();
    }
    onChange(e.target.value);
  };
  return (
    <>
      <input onInput={handleInput} />
      {!isLastField && <button onClick={onRemove}>remove</button>}
    </>
  );
}
