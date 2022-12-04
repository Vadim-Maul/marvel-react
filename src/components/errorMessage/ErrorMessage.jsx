import img from "./error-x-error.gif";

const ErrorMessage = () => {
  return (
    <img
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "contain",
        margin: "0 auto",
      }}
      src={img}
      alt="error"
    />
  );
};

export default ErrorMessage;
