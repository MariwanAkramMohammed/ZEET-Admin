import React from "react";
import AdminPage from "./pages/Adminpage";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const Admin = useSelector((state) => state.Admin.currentAdmin);

  return <div>{Admin?.isAdmin ? <AdminPage /> : <Login />}</div>;
}

export default App;
