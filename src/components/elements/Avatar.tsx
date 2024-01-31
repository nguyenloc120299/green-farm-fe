import React from "react";
import { styled } from "styled-components";
import avt from "assets/farm/avatar.png";
interface Type_Props {
  onHandle?: () => void;
}
const Avatar = ({ onHandle }: Type_Props) => {
  return (
    <AvatarStyled onClick={onHandle}>
      <img src={avt} alt="" />
    </AvatarStyled>
  );
};

export default Avatar;
const AvatarStyled = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 50px;
    height: 50px;
  }
`;
