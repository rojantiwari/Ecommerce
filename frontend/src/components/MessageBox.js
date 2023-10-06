import Alert from "react-bootstrap/Alert";
export default function MessageBox(props) {
  return (
    <Alert varient={props.varient || "info"} className="alert alert-danger">
      {props.children}
    </Alert>
  );
}
