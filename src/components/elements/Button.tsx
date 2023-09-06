import { Button } from "antd";
import React from "react";
import { styled } from "styled-components";
interface Props_Style {
  width: number;
}
interface Props_Type extends Props_Style {
  children?: React.ReactNode;
  onEvent?: (params: any | null) => void;
}
const ButtonCustom = ({ width, children, onEvent }: Props_Type) => {
  return (
    <ButtonCustomStyled width={width} type="default" onClick={onEvent}>
      {children}
    </ButtonCustomStyled>
  );
};

export default ButtonCustom;

const ButtonCustomStyled = styled(Button)<Props_Style>`
  &.ant-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 30px;
    color: #ffc000;
    text-shadow: 0 1px 3px #000;
    width: 100%;
    text-align: center;
    background: radial-gradient(circle, #078c33, #078c33);
    border-top: 4px ridge #ffb000;
    border-left: 4px groove #ffb000;
    border-right: 4px ridge #ffb000;
    border-bottom: 4px groove #ffb000;
    box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
    &:focus {
      border-color: #ffb000 !important;
      color: #ffb000 !important;
      border-top: 4px ridge #ffb000;
      border-left: 4px groove #ffb000;
      border-right: 4px ridge #ffb000;
      border-bottom: 4px groove #ffb000;
      box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
    }
    &:active {
      border-color: #ffb000 !important;
      color: #ffb000 !important;
      border-top: 4px ridge #ffb000;
      border-left: 4px groove #ffb000;
      border-right: 4px ridge #ffb000;
      border-bottom: 4px groove #ffb000;
      box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
    }
  }
`;
