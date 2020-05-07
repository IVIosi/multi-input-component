import React, { useState } from 'react';

import InputRow from './components/input-row';

export default function App({ onChange }) {
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
    <>
      {Object.keys(inputFields).map((fieldKey, index) => {
        const isLastField = index === Object.keys(inputFields).length - 1;
        return (
          <InputRow
            key={fieldKey}
            isLastField={isLastField}
            onChange={(value) => handleFieldInputChange(value, fieldKey)}
            onRemove={() => handleFieldRemove(fieldKey)}
            onInput={isLastField ? addFieldRow : null}
          />
        );
      })}
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}
