import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "value":
      return {
        ...state,
        values: { ...state.values, [action.key]: action.value },
      };
    case "error":
      return {
        ...state,
        errors: { ...state.errors, [action.key]: action.error },
      };
    default:
      return {
        ...state,
        values: { ...state.values, [action.key]: action.value },
        errors: { ...state.errors, [action.key]: action.error },
      };
  }
};

const initialState = {
  values: {},
  errors: {},
};

const Form = ({ children, onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (Object.values(state.errors).some(Boolean)) {
          return;
        }
        onSubmit(state.values, state, e);
      }}
    >
      <FormContext.Provider value={{ state, dispatch }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};
export const FormContext = createContext();

export default Form;
