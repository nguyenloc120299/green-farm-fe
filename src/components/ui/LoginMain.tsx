import { Button, Col, Form, Input, Row } from "antd";
import ButtonCustom from "components/elements/Button";
import React, { useState } from "react";
import { styled } from "styled-components";
enum TypeForm {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}
const LoginMain = () => {
  const [typeForm, setTypeForm] = useState<TypeForm | null>(null);
  if (typeForm === TypeForm.LOGIN)
    return (
      <LoginStyled className="login-page">
        <Form className="form">
          <Form.Item>
            <Input placeholder="Email của bạn" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Mật khẩu của bạn" />
          </Form.Item>
          <Form.Item>
            <ButtonCustom width={100}>Đăng nhập</ButtonCustom>
          </Form.Item>
        </Form>
      </LoginStyled>
    );
  else if (typeForm === TypeForm.REGISTER)
    return (
      <LoginStyled className="login-page">
        <Form className="form">
          <Form.Item>
            <Input placeholder="Email của bạn" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Mật khẩu của bạn" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Nhập lại mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Mã giới thiệu" />
          </Form.Item>
          <Form.Item>
            <Row gutter={8}>
              <Col span={14}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input the captcha you got!",
                    },
                  ]}
                >
                  <Input placeholder="Mã xác thực mail" />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Button>Nhận mã</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <ButtonCustom width={100}>Đăng kí</ButtonCustom>
          </Form.Item>
          <Form.Item></Form.Item>
        </Form>
      </LoginStyled>
    );
  return (
    <LoginStyled className="login-page">
      <div className="form">
        <div className="options">
          <ButtonCustom width={100} onEvent={() => setTypeForm(TypeForm.LOGIN)}>
            Đăng nhập
          </ButtonCustom>
          <ButtonCustom
            width={100}
            onEvent={() => setTypeForm(TypeForm.REGISTER)}
          >
            Đăng kí
          </ButtonCustom>
        </div>
      </div>
    </LoginStyled>
  );
};

export default LoginMain;
const LoginStyled = styled.div`
  &.login-page {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .form {
      max-width: 375px;
      margin: auto;
      width: 100%;
      border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAACVBMVEUAAAAYFCXupGhEFGpVAAAAAXRSTlMAQObYZgAAABpJREFUCNdjYA1lYJBa5cCQwDABGwbJgdQAAKX2CF37xkC2AAAAAElFTkSuQmCC)
        20% / 1 / 0 stretch;
      border-style: solid;
      border-width: 5.25px;
      image-rendering: pixelated;
      border-radius: 15px;
      padding: 2.625px;
      background-color: rgb(185, 111, 80);
      padding: 25px 10px;
      .ant-input {
        min-height: 40px;
        &::placeholder {
          color: #999;
          font-weight: 500;
        }
        &:focus {
          border: none;
          outline: none;
          box-shadow: none;
        }
      }
      .options {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  }
`;
