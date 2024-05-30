import React from "react";
import Routes from "./Routes";
import "./styles/font.css";
import "./styles/index.css";
import "./styles/tailwind.css";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Outlet />
    </div>
  );
}
export default App;
