import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { ColorConstants } from 'globalStyles/color'
import { useState } from 'react'
import { styled } from 'styled-components'
import btn from "assets/mipmap-xxxhdpi-v4/invitation_tx_button_sel.png"
import { FORM_REGISTER } from 'types/auth'
import Loading from 'components/elements/Loading'
import { useFnLoading } from 'hooks/useLoading'
import { TYPE_LOADING } from 'contants'
enum TypeForm {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER'
}
const LoginMain = () => {
  const [typeForm, setTypeForm] = useState<TypeForm | null>(null)
  const [loading, setLoading] = useState(false)
  const { onLoading } = useFnLoading()
  const handleRegister = (form: FORM_REGISTER) => {
    onLoading({
      type: TYPE_LOADING.APP,
      value: true
    })

  }

  if (typeForm === TypeForm.LOGIN)
    return (
      <LoginStyled className='login-page'>

        <Form className='form'>
          <div className='form-header-title'>
            <ArrowLeftOutlined onClick={() => setTypeForm(null)} />
            <h3>Đăng nhập</h3>
          </div>
          <Form.Item >
            <Input autoComplete="off" placeholder='Email của bạn' value={''} />
          </Form.Item>
          <Form.Item>
            <Input autoComplete="off" placeholder='Mật khẩu của bạn' type='password' value={''} />
          </Form.Item>
          <Form.Item>
            <div className='button-auth' >
              <img src={btn} style={{ width: "80%" }} />
              <div className='btn-name'>
                <h3>
                  Đăng nhập
                </h3>

              </div>
            </div>
          </Form.Item>
        </Form>
      </LoginStyled>
    )
  else if (typeForm === TypeForm.REGISTER)
    return (
      <LoginStyled className='login-page' >
        <Form<FORM_REGISTER> className='form' onFinish={handleRegister}>
          <div className='form-header-title'>
            <ArrowLeftOutlined onClick={() => setTypeForm(null)} />
            <h3>Đăng kí</h3>
          </div>

          <Form.Item name='account_name'>
            <Input autoComplete="off" placeholder='Tên tài khoản' />
          </Form.Item>
          <Form.Item name="password">
            <Input autoComplete="off" placeholder='Mật khẩu của bạn' />
          </Form.Item>
          <Form.Item name="confirm_password">
            <Input autoComplete="off" placeholder='Nhập lại mật khẩu' />
          </Form.Item>
          <Form.Item name="code_invite">
            <Input autoComplete="off" placeholder='Mã giới thiệu' />
          </Form.Item>
          <Form.Item name='isAccept'>
            <Checkbox  >Chấp nhận với điều khoản của trò chơi</Checkbox>
          </Form.Item>
          <Form.Item>
            <button type='submit' className='button-auth' >
              <img src={btn} style={{ width: "80%" }} />
              <div className='btn-name'>
                <h3>
                  Đăng Kí
                </h3>

              </div>
            </button>
          </Form.Item>
        </Form>
      </LoginStyled>
    )
  return (
    <LoginStyled className='login-page'>

      <div className='form'>
        <h3>Chào mừng bạn đến GreenFarm</h3>
        <div className='options'>
          <div className='button-auth' onClick={() => setTypeForm(TypeForm.LOGIN)}>
            <img src={btn} style={{ width: "80%" }} />
            <div className='btn-name'>
              <h3>
                Đăng nhập
              </h3>

            </div>
          </div>
          <div className='button-auth' onClick={() => setTypeForm(TypeForm.REGISTER)}>
            <div className='btn-name'>
              <h3>
                Đăng Kí
              </h3>

            </div>
            <img src={btn} style={{ width: "80%" }} />
          </div>
        </div>
      </div>
    </LoginStyled>
  )
}

export default LoginMain
const LoginStyled = styled.div`
  &.login-page {
    
    position: absolute;
    max-width: 375px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 40px #000;
    .form {
      border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAACVBMVEUAAAAYFCXupGhEFGpVAAAAAXRSTlMAQObYZgAAABpJREFUCNdjYA1lYJBa5cCQwDABGwbJgdQAAKX2CF37xkC2AAAAAElFTkSuQmCC)
        20% / 1 / 0 stretch;
      border-style: solid;
      border-width: 5.25px;
      image-rendering: pixelated;
      border-radius: 15px;
      padding: 2.625px;
      background-color: ${ColorConstants.bg_main_2};
      padding: 0 15px;
      .button-auth{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-name{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          h3{
            color: #fff;
          }
        }
        img{
          width: 80%;
          height: 80%;
        }
      }
      .form-header-title {
        display: flex;
        justify-content: center;
        align-items: center;
        span.anticon {
          font-size: 24px;
          font-weight: 700;
        }
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
          height: 50px;
          border-radius: 20px;
          border: 3px solid #222;
          background: #888;
          color: #fff;
          font-weight: 700;
        &::placeholder {
          color: #ccc;
          font-weight: 700;
        }
        &:focus {
          border: 3px solid #222;
          outline: none;
          box-shadow: none;
        }
      }
      .options {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 10px 0;
      }
    }
  }
`
