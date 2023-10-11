import { useState } from "react";

const TextBox = (props) => {
  const [showError, setShowError] = useState();
  const { value, onChange, validators, label } = props;

  const onChangeWrapper = (event) => {
    onChange(event);
    if (validators?.length) {
      let error;
      for (let index = 0; index < validators?.length; ++index) {
        error = validators[index](event.target?.value);
        if (error) break;
      }
      setShowError(error);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <input value={value} onChange={onChangeWrapper} />
      {showError && <span>{showError}</span>}
    </div>
  );
};

export default TextBox;
