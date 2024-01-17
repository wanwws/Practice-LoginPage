import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./Login.css";

const LoginPage = () => {
  //   const onFinish = (values: any) => {
  //     console.log('Received values of form: ', values);
  //   };

  return (
    <div>
        <h2>Login</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        //   onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Not a Member ? <a href="">Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
