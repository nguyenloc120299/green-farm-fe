import { ArrowLeftOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";
import ButtonCustom from "components/elements/Button";
import { ColorConstants } from "globalStyles/color";
import { useState } from "react";
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
          <div className="form-header-title">
            <ArrowLeftOutlined onClick={() => setTypeForm(null)} />
            <h3>Đăng nhập</h3>
          </div>
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
          <div className="form-header-title">
            <ArrowLeftOutlined onClick={() => setTypeForm(null)} />
            <h3>Đăng kí</h3>
          </div>

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
            <Form.Item>
              <Checkbox>Chấp nhận với điều khoản của trò chơi</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <ButtonCustom width={100}>Đăng kí</ButtonCustom>
          </Form.Item>
        </Form>
      </LoginStyled>
    );
  return (
    <LoginStyled className="login-page">
      <div className="form">
        <h3>Chào mừng bạn đến GreenFarm</h3>
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
    max-width: 375px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .form {
      border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAACVBMVEUAAAAYFCXupGhEFGpVAAAAAXRSTlMAQObYZgAAABpJREFUCNdjYA1lYJBa5cCQwDABGwbJgdQAAKX2CF37xkC2AAAAAElFTkSuQmCC)
        20% / 1 / 0 stretch;
      border-style: solid;
      border-width: 5.25px;
      image-rendering: pixelated;
      border-radius: 15px;
      padding: 2.625px;
      background-color: ${ColorConstants.bg_main_2};
      padding: 25px 10px;

      .form-header-title {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h3 {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        flex: 1;
      }
      .ant-checkbox {
        span {
          font-size: 18px;
          font-weight: 500;
        }
      }
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
