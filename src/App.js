import React, { useState } from "react";
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
import { Routes, Route } from "react-router-dom";
// import { Footer, Header } from "antd/es/layout/layout";
import SideMenu from "./SideMenu";

function Header() {
  return (
    <div
      style={{
        height: 60,
        backgroundColor: "lightskyblue",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      Header
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        height: 60,
        backgroundColor: "lightgray",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      Footer
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
      }}
    >
      <Header />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <LoginPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
