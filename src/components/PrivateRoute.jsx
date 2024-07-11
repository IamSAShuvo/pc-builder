
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const currentUser = localStorage.getItem("user");

  return currentUser ? children : <Navigate replace to="/admin" />;
}
