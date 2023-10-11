import logo from "./logo.svg";
import "./App.css";
import TextBox from "./components/textBox";
import { useReducer } from "react";
import Validators from "./utils/validators";

const initialState = {
  firstName: "",
  lastName: "",
};

const formSetter = (state, action) => {
  return {
    ...state,
    [action.key]: action.value,
  };
};

function App() {
  const [formValues, setter] = useReducer(formSetter, initialState);
  console.log(formValues, "formValues");
  return (
    <div>
      <TextBox
        value={formValues.firstName}
        onChange={(event) =>
          setter({ key: "firstName", value: event.target?.value })
        }
        validators={[Validators.required("First name is required")]}
        label={"First Name"}
      />
    </div>
  );
}

export default App;
