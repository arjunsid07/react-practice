import { useContext } from "react";
import { FormContext } from "../form/form";

const Field = ({ id, validators, type, render }) => {
  const formProvider = useContext(FormContext);
  const dispatchValue = (value) => {
    formProvider.dispatch({ key: id, value, type: "value" });
  };

  const dispatchError = (value) => {
    let error;

    for (let index = 0; index < validators?.length; ++index) {
      if (error) break;
      error = validators[index](value);
    }
    if (error) {
      formProvider.dispatch({ key: id, error, type: "error" });
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    dispatchError(value);
    dispatchValue(value);
  };

  const onFocus = (e) => {
    const value = formProvider.state.values[id];
    dispatchError(value);
  };
  return (
    <div style={{ width: "20%" }}>
      {render ? (
        render({ value: formProvider.state.values[id], onChange: onChange })
      ) : (
        <>
          <input
            type={type}
            value={formProvider.state.values[id]}
            onChange={onChange}
            onFocus={onFocus}
            style={
              formProvider.state.errors[id]
                ? { border: "3px solid red", minWidth: "100%" }
                : { minWidth: "100%" }
            }
          />
          {formProvider.state.errors[id] && (
            <span style={{ color: "red", fontSize: "12px", minWidth: "100%" }}>
              {formProvider.state.errors[id]}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Field;
