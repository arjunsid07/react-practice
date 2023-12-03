class ErrorUtils {
  static required(requiredMessage) {
    return (value) => {
      if (!value) return requiredMessage;
    };
  }
}

export default ErrorUtils;
