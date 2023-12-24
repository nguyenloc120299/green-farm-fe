/* eslint-disable jsx-a11y/alt-text */
import logo_bg from "assets/mipmap-xxxhdpi-v4/unlock_people_bg.png";
import { PRICE, TYPE_LOADING, TYPE_MODAL } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import styled from "styled-components";
import ModalBase from "./ModalBaseCustom";
import img1 from "assets/mipmap-xxxhdpi-v4/txcg_my_bg1.png";
import homeland1 from "assets/mipmap-xxxhdpi-v4/home_land1.png";
import btnBg from "assets/mipmap-xxxhdpi-v4/time_reward_btn_sel.png";
import { useAppDispatch, useAppSelector } from "store";
import { setMessage } from "store/app";
import { buyLand } from "api/user";
import { useFnLoading, useLoading } from "hooks/useLoading";
import { StatusCode } from "api/core";
import useApiUser from "api/hook/useApiUser";
const ModalUnlockLand = () => {
  const isModalOpen = useOpen(TYPE_MODAL.UNLOCK_LAND);
  const { onOpen } = useFnOpen();
  const { user } = useAppSelector((state) => state.user);
  const { onLoading } = useFnLoading();
  const loading = useLoading(TYPE_LOADING.APP);
  const dispatch = useAppDispatch();
  const { fetchUser } = useApiUser();
  const handleUnlockLand = async () => {
    onLoading({
      type: TYPE_LOADING.APP,
      value: true,
    });
    try {
      if (!user) return;

      if (user.money_balance < PRICE.LAND)
        throw new Error("Bạn không đủ tiền để mua.");
      const data = await buyLand(user.landNotBuy + 1);
      if (data.statusCode === StatusCode.SUCCESS) {
        await fetchUser(true);
        onOpen({
          type: TYPE_MODAL.UNLOCK_LAND,
          value: false,
        });
        dispatch(
          setMessage({
            isOpen: true,
            title: "Chúc mừng bạn đã mở khóa 1 ô đất",
          })
        );
      }
    } catch (error: any) {
      dispatch(
        setMessage({
          isOpen: true,
          title: error?.response?.data?.message || error?.message,
        })
      );
    }
    onLoading({
      type: TYPE_LOADING.APP,
      value: false,
    });
  };
  return (
    <ModalBase
      onCancel={() =>
        !loading && onOpen({
          type: TYPE_MODAL.UNLOCK_LAND,
          value: false,
        })
      }
      isModalOpen={isModalOpen}
      titleHeader="Mở khóa đất"
    >
      <BodyStyled className="body" bgLogo={logo_bg}>
        <div className=" review">
          <img src={img1} style={{ width: "70%", margin: "auto" }} />
          <div className="land">
            <img src={homeland1} style={{ width: "150px" }} />
            <div className="title">Cần 300.000 đ để mở khóa</div>
          </div>
          <button
            disabled={loading}
            className="btn-unlock"
            onClick={handleUnlockLand}
          >
            <img src={btnBg} />
            <div className="btn-name">Mở khóa ngay</div>
          </button>
        </div>
      </BodyStyled>
    </ModalBase>
  );
};

export default ModalUnlockLand;
const BodyStyled: any = styled.div`
  &.body {
    position: relative;
    border-radius: 5px;
    padding: 10px;
    .review {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
      .land {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .title {
          font-size: 20px;
          font-weight: 700;
          margin-top: 20px;
        }
      }
      .btn-unlock {
        margin-top: 20px;
        width: 170px;
        height: 50px;
        position: relative;
        .btn-name {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          font-weight: 700;
          text-align: center;
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
`;
