import Observer from "./components/observer/observer";
import Field from "./components/field/field";
import ErrorUtils from "./components/utils/errorUtils";

const PersonForm = () => {
  return (
    <>
      Hello Hi!!!
      <Field
        id="firstName"
        type="text"
        validators={[ErrorUtils.required("First Name is Required")]}
        // width={"20%"}
      />
      <Field
        id="lastName"
        type="text"
        // width={"20%"}
        validators={[ErrorUtils.required("Last Name is Required")]}
      />
      <Observer properties={["values"]}>
        {({ values }) => {
          console.log("values", values);
          return <div>Form Spy</div>;
        }}
      </Observer>
      <button type="submit">Submit</button>
    </>
  );
};

export default PersonForm;
