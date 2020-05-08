import React, { useState } from 'react';

export default function InputRow(props) {
  const { label, onInput, onChange, onRemove, isLastField } = props;
  const [active, setActive] = useState(false);
  const handleInput = (e) => {
    if (typeof onInput === 'function') {
      onInput();
    }
    onChange(e.target.value);
  };
  const handleFocus = (e) => {
    setActive(true);
  };
  const handleBlur = (e) => {
    setActive(false);
  };
  return (
    <div className="field-input">
      <div className={'field-input__text'.concat(active ? ' active' : '')}>
        <label className="field-input__label">{label}</label>
        <input
          className="field-input__input"
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {!isLastField && (
        <button
          className="field-input__remove-button"
          onClick={onRemove}
        ></button>
      )}
    </div>
  );
}
