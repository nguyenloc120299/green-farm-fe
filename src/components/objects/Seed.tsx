import styled from "styled-components";
import rice from "assets/mipmap-xxxhdpi-v4/home_house_people9.png";
const Seed = () => {
  return (
    <SeedStyled>
      <img src={rice} alt="" />
    </SeedStyled>
  );
};

export default Seed;
const SeedStyled = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 60px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
