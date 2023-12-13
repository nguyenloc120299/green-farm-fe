import styled from "styled-components";
import { ColorConstants } from "./color";

export const LoginStyled = styled.div`
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
      .button-auth {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-name {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          h3 {
            color: #fff;
          }
        }
        img {
          width: 60%;
          height: 60%;
        }
      }
      .form-header-title {
        display: flex;
        justify-content: center;
        align-items: center;
        span.anticon {
          font-size: 20px;
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
`;