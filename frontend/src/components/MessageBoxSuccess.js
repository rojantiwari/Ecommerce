import Alert from "react-bootstrap/Alert";
export default function MessageBoxSuccess(props) {
  return (
    <Alert varient={props.varient || "info"} className="alert alert-success">
      {props.children}
    </Alert>
  );
}
