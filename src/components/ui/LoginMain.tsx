/* eslint-disable jsx-a11y/alt-text */
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";
import { useState } from "react";
import btn from "assets/mipmap-xxxhdpi-v4/invitation_tx_button_sel.png";
import { FORM_LOGIN, FORM_REGISTER } from "types/auth";
import Loading from "components/elements/Loading";
import { useFnLoading } from "hooks/useLoading";
import { TYPE_LOADING } from "contants";
import { getMe, signUp, signin } from "api/auth";
import { StatusCode } from "api/core";
import { LoginStyled } from "globalStyles/login";
import { useAppDispatch } from "store";
import { setLoginApp, setMessage } from "store/app";
import { setMyLand, setUser } from "store/user";
enum TypeForm {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}
const LoginMain = () => {
  const [typeForm, setTypeForm] = useState<TypeForm | null>(null);
  const [loading, setLoading] = useState(false);
  const { onLoading } = useFnLoading();
  const dispatch = useAppDispatch();

  const handleRegister = async (form: FORM_REGISTER) => {
    onLoading({
      type: TYPE_LOADING.APP,
      value: true,
    });
    try {
      if (!form.account_name)
        throw new Error("Tên tài khoản không được để trống");
      if (!form.password) throw new Error("Bạn chưa nhập mật khẩu");
      if (form.password !== form.confirm_password)
        throw new Error("Mật khẩu xác nhận không trùng khớp");
      const data = await signUp({
        account_name: form.account_name.toLocaleLowerCase(),
        password: form.password,
      });
      if (data && data.statusCode === StatusCode.SUCCESS) {
        dispatch(
          setMessage({
            isOpen: true,
            title: "Bạn đã đăng kí tài khoản thành công",
            onClick: () => {
              dispatch(setMessage({ isOpen: false }));
              setTypeForm(TypeForm.LOGIN);
            },
          })
        );
      } else throw new Error("Đăng kí thất bại vui lòng thử lại");
    } catch (error: any) {
      dispatch(
        setMessage({
          isOpen: true,
          title: error?.message,
        })
      );
    }
    onLoading({
      type: TYPE_LOADING.APP,
      value: false,
    });
  };

  const handleLogin = async (form: FORM_LOGIN) => {
    onLoading({
      type: TYPE_LOADING.APP,
      value: true,
    });
    try {
      if (!form.account_name) throw new Error("Bạn chưa nhập tên tài khoản");
      if (!form.password) throw new Error("Bạn chưa nhập mật khẩu");
      const data = await signin({
        ...form,
      });
      if (data && data.statusCode === StatusCode.SUCCESS) {
        localStorage.setItem("accessToken", data.data?.tokens.accessToken);
        localStorage.setItem("refreshToken", data.data?.tokens.refreshToken);
        const user = await getMe();
        if (user.statusCode === StatusCode.SUCCESS) {
          dispatch(setUser(user.data));
          dispatch(setLoginApp(true));
        }
      }
    } catch (error: any) {
      dispatch(
        setMessage({
          isOpen: true,
          title: error?.message,
        })
      );
    }
    onLoading({
      type: TYPE_LOADING.APP,
      value: false,
    });
  };
  if (typeForm === TypeForm.LOGIN)
    return (
      <LoginStyled className="login-page">
        <Form className="form" onFinish={handleLogin}>
          <div className="form-header-title">
            <ArrowLeftOutlined onClick={() => setTypeForm(null)} />
            <h3>Đăng nhập</h3>
          </div>
          <Form.Item name="account_name">
            <Input autoComplete="off" placeholder="Nhập tên tài khoản" />
          </Form.Item>
          <Form.Item name="password">
            <Input
              autoComplete="off"
              placeholder="Nhập mật khẩu"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <button type="submit" className="button-auth">
              <img src={btn} style={{ width: "80%" }} />
              <div className="btn-name">
                <h3>Đăng nhập</h3>
              </div>
            </button>
          </Form.Item>
        </Form>
      </LoginStyled>
    );
  else if (typeForm === TypeForm.REGISTER)
    return (
      <LoginStyled className="login-page">
        <Form<FORM_REGISTER> className="form" onFinish={handleRegister}>
          <div className="form-header-title">
            <ArrowLeftOutlined onClick={() => setTypeForm(null)} />
            <h3>Đăng kí</h3>
          </div>

          <Form.Item name="account_name">
            <Input autoComplete="off" placeholder="Tên tài khoản" />
          </Form.Item>
          <Form.Item name="password">
            <Input autoComplete="off" placeholder="Mật khẩu của bạn" />
          </Form.Item>
          <Form.Item name="confirm_password">
            <Input autoComplete="off" placeholder="Nhập lại mật khẩu" />
          </Form.Item>
          <Form.Item name="code_invite">
            <Input autoComplete="off" placeholder="Mã giới thiệu" />
          </Form.Item>
          <Form.Item name="isAccept">
            <Checkbox checked>Chấp nhận với điều khoản của trò chơi</Checkbox>
          </Form.Item>
          <Form.Item>
            <button type="submit" className="button-auth">
              <img src={btn} style={{ width: "80%" }} />
              <div className="btn-name">
                <h3>Đăng Kí</h3>
              </div>
            </button>
          </Form.Item>
        </Form>
      </LoginStyled>
    );
  return (
    <LoginStyled className="login-page">
      <div className="form">
        <h3>Chào mừng bạn đến GreenFarm</h3>
        <div className="options">
          <div
            className="button-auth"
            onClick={() => setTypeForm(TypeForm.LOGIN)}
          >
            <img src={btn} style={{ width: "70%" }} />
            <div className="btn-name">
              <h3>Đăng nhập</h3>
            </div>
          </div>
          <div
            className="button-auth"
            onClick={() => setTypeForm(TypeForm.REGISTER)}
          >
            <div className="btn-name">
              <h3>Đăng Kí</h3>
            </div>
            <img src={btn} style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default LoginMain;
