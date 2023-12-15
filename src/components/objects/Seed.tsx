import styled from "styled-components";


interface Props {
  imgPlant: string;
}
const Seed = ({imgPlant}: Props) => {
  return (
    <SeedStyled>
      <img src={imgPlant} alt="" />
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
  width: 35px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
