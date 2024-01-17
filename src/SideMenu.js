import React from 'react';
import {
  FileTextOutlined,
  LineChartOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "./App.css";
import LoginPage from "./component/Login";
// import RegisterPage from "./component/Register";
import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate()
  return (
    // <RegisterPage />
    // <LoginPage />
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Menu
        onClick={({key})=>{
          if(key === 'signout'){
            //to do signout feature here
          }else{
            navigate(key)
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Management Flower", key:"/", icon: <FileTextOutlined /> },
          { label: "Flower List / Profile", key:"/flowerlist", icon: <UnorderedListOutlined /> },
          { label: "Report", key:"/report", icon: <LineChartOutlined /> },
          { label: "Signout", key:"signout", icon: <PoweroffOutlined />, danger: true },
        ]}
      ></Menu>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path='/' element={<di>Management Flower</di>}></Route>
        <Route path='/flowerlist' element={<di>Flower List / Profile</di>}></Route>
        <Route path='/report' element={<di>Report</di>}></Route>
      </Routes>
    </div>
  );
}

export default SideMenu;