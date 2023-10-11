class Validators {
  static required(requiredMessage) {
    return (value) => (!value ? requiredMessage : "");
  }
}

export default Validators;
