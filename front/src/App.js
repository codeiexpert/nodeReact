import { Routes, Route } from "react-router-dom";

//Admin
import Dashboard from "./pages/Dashboard";

//Guest
import Layout from "./pages/layout/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NoPageFound from "./pages/NoPageFound";
import './App.css';
import ProtectedLayout from "./pages/layout/ProtectedLayout";
import { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  const [user, setUser] = useState(localStorage.getItem('auth'));
  // console.log(user);

  return (
    <Routes>     
      <Route path="/" element={<Layout isAllowed={user} isAdminPage={false} />}>
        <Route index element={<Home />} />
        <Route exact path="about" element={<AboutUs />} />
        <Route exact path="contact" element={<ContactUs />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
        <Route exact path="*" element={<NoPageFound />} />       
      </Route>
      <Route path="/dashboard" element={<ProtectedLayout isAllowed={user} isAdminPage={true}  />}>
        <Route exact index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}


export default App;
