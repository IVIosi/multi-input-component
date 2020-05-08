import React, { useState } from 'react';

import InputRow from './components/input-row';

export default function MultiInput({ name, title, onChange }) {
  const [inputFields, setInputFields] = useState({
    '1': '',
  });
  const addFieldRow = () => {
    setInputFields((prevState) => {
      const arrOfKeys = Object.keys(prevState);
      const lastFieldKey = arrOfKeys[arrOfKeys.length - 1];
      return {
        ...prevState,
        [Number(lastFieldKey) + 1]: '',
      };
    });
  };
  const handleSubmit = () => {
    const inputValues = Object.values(inputFields);
    inputValues.pop();
    onChange(inputValues);
  };
  const handleFieldInputChange = (value, fieldKey) => {
    setInputFields((prevState) => ({
      ...prevState,
      [fieldKey]: value,
    }));
  };
  const handleFieldRemove = (fieldKey) => {
    setInputFields((prevState) => {
      let { [fieldKey]: omit, ...newState } = prevState;
      return newState;
    });
  };

  return (
    <div className="main-form">
      <div className="multi-input">
        <p>{title}</p>
        {Object.keys(inputFields).map((fieldKey, index) => {
          const isLastField = index === Object.keys(inputFields).length - 1;
          return (
            <InputRow
              label={name}
              key={fieldKey}
              isLastField={isLastField}
              onChange={(value) => handleFieldInputChange(value, fieldKey)}
              onRemove={() => handleFieldRemove(fieldKey)}
              onInput={addFieldRow}
            />
          );
        })}
      </div>
      <div className="button-section">
        <button className="btn secondary">CANCEL</button>
        <button className="btn primary" onClick={handleSubmit}>
          SAVE
        </button>
      </div>
    </div>
  );
}
