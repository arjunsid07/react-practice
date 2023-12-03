import Employees from "../employee/employees";
import RouteBuilder from "./routeBuilder";

const routeConfiguration = [new RouteBuilder("/employees", Employees)];

export default routeConfiguration;
