import React from "react";
import { styled } from "styled-components";
import avt from "assets/mipmap-xxxhdpi-v4/dialog_guide_people.png";
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  border: 3px solid #fff;
  img {
    width: 100%;
    height: 100%;
  }
`;
