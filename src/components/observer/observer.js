import { useContext } from "react";
import { FormContext } from "../form/form";

const Observer = ({ properties, children }) => {
  const formProvider = useContext(FormContext);

  const filtered = Object.keys(formProvider)
    .filter((key) => properties.includes(key))
    .reduce((obj, key) => {
      obj[key] = formProvider[key];
      return obj;
    }, {});

  return children(filtered);
};

export default Observer;
