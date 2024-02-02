import logo_bg from "assets/mipmap-xxxhdpi-v4/unlock_people_bg.png";
import { TYPE_MODAL } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import styled from "styled-components";
import ModalBase from "./ModalBaseCustom";
import loteryIcon from "assets/games/lottery.png";
import fortuneWheel from "assets/games/fortune-wheel.png";
import trophy from "assets/games/trophy.png";
import bg_play from "assets/mipmap-xxxhdpi-v4/time_reward_btn_sel.png";
import ListModal, { ListItem } from "components/elements/ListModal";
import ButtonImage from "components/elements/Button";
const ModalGames = () => {
  const isModalOpen = useOpen(TYPE_MODAL.GAMES);
  const { onOpen } = useFnOpen();
  return (
    <ModalBase
      onCancel={() =>
        onOpen({
          type: TYPE_MODAL.GAMES,
          value: false,
        })
      }
      isModalOpen={isModalOpen}
      titleHeader="Danh sách trò chơi"
    >
      <BodyStyled className="body" bgLogo={logo_bg}>
        <ListModal>
          <ListItem>
            <div className="logo">
              <img src={loteryIcon} alt="loteryIcon" />
            </div>
            <div className="des-games">Xổ xố thần tài</div>
            <ButtonImage
              title="Chơi"
              bgImg={bg_play}
              width={70}
              height={30}
              onEvent={() => {
                onOpen({
                  type: TYPE_MODAL.LOTTERY,
                  value: true,
                });
                onOpen({
                  type: TYPE_MODAL.GAMES,
                  value: false,
                });
              }}
            />
          </ListItem>
          <ListItem>
            <div className="logo">
              <img src={fortuneWheel} alt="loteryIcon" />
            </div>
            <div className="des-games">Vòng xoay may mắn</div>

            <ButtonImage
              title="Chơi"
              bgImg={bg_play}
              width={70}
              height={30}
              onEvent={() => {
                onOpen({
                  type: TYPE_MODAL.LUCKYWEEL,
                  value: true,
                });
                onOpen({
                  type: TYPE_MODAL.GAMES,
                  value: false,
                });
              }}
            />
          </ListItem>
          <ListItem>
            <div className="logo">
              <img src={trophy} alt="loteryIcon" />
            </div>
            <div className="des-games">Đua ốc sên</div>

            <ButtonImage
              title="Chơi"
              bgImg={bg_play}
              width={70}
              height={30}
              onEvent={() => {}}
            />
          </ListItem>
        </ListModal>
      </BodyStyled>
    </ModalBase>
  );
};

export default ModalGames;
const BodyStyled: any = styled.div`
  &.body {
    position: relative;
    border-radius: 5px;
    padding: 10px;
    .logo {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      background: url(${(props: any) => props.bgLogo}) no-repeat;
      background-position: center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        object-fit: cover;
      }
    }
    .des-games {
      flex: 1;
      color: #04155f;
      text-align: left;
      font-size: 18px;
      font-weight: 700;
      max-width: 150px;
    }
  }
`;
