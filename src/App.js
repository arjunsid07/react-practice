import "./App.css";
import withRouteContainer from "./infra/routeMatcher";
import { Link } from "react-router-dom";
import Form from "./components/form/form";
import PersonForm from "./PersonForm";
function App() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <PersonForm />
      </Form>
    </div>
  );
}

export default withRouteContainer(App);
