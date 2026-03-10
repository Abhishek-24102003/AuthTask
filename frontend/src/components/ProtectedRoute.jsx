import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  let LSD = JSON.parse(localStorage.getItem("user"));
  if (!LSD.isVerified) {
    alert("Access denied");
    return <Navigate to={"/"}/>
  }
  
  return <Outlet/>
}

export default ProtectedRoute
