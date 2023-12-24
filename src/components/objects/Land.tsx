import React, { useRef, useState } from "react";
import landImg from "assets/farm/farm-area.png";
import { PropsType } from "global";
import { Progress } from "antd";
import useOnClickOutside from "hooks/useClickOutSide";
import { LandStyle } from "globalStyles/land";
import { Category_Land } from "types/land";
import { useCountdown } from "hooks/useCountdown";
import havestIcon from 'assets/mipmap-xxxhdpi-v4/home_js_coin.png'
import { useAppDispatch, useAppSelector } from "store";
import { setMessage } from "store/app";
import { useFnLoading, useLoading } from "hooks/useLoading";
import { TYPE_LOADING } from "contants";
import { havest } from "api/user";
import { StatusCode } from "api/core";
import { setMyLand, setUser } from "store/user";

const Land = ({
  column,
  row,
  children,
  onClick,
  status,
  landItem,
}: PropsType) => {
  const [isShow, setIsShow] = useState(false);
  const ref = useRef<any>();
  const dispatch = useAppDispatch()
  const loading = useLoading(TYPE_LOADING.APP)
  const { land: lands, user } = useAppSelector((state) => state.user)
  const { onLoading } = useFnLoading()
  useOnClickOutside(ref, () => {
    isShow && setIsShow(false);
  });

  const [minutes, seconds, hours] = useCountdown(landItem?.time_end);

  const havestPlant = async () => {
    try {
      if (!landItem?.land_id) throw new Error("Không tìm thấy mảnh đất này")
      if (status === Category_Land.NO_PLANT) throw new Error("Không có cây trồng")
      onLoading({
        type: TYPE_LOADING.APP,
        value: true,
      });
      const res = await havest(landItem.land_id)
      if (res.statusCode === StatusCode.SUCCESS) {
        const { land, user: userData } = res.data


        const newData = lands.map((l: any) =>
          l?.land_id === land?.land_id ? land : l
        );
        dispatch(setUser({
          myland: newData,
          userData: {
            landNotBuy: user?.landNotBuy, ...userData
          }
        }));

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
  }
  return (
    <LandStyle
      style={{ gridColumn: column, gridRow: row }}
      onClick={() => {
        onClick && onClick();
        status && setIsShow(true);
      }}
      ref={ref}
    >
      <img src={landImg} alt="Land" />
      {children}
      {isShow && seconds > 0 && status === Category_Land.PLANTING && (
        <div className="time-havert">
          <div className="time">
            {hours}:{minutes}:{seconds}
          </div>
          <Progress percent={30} showInfo={false} strokeColor={"#3b9615"} />
        </div>
      )}
      {isShow && seconds <= 0 && status === Category_Land.PLANTING && (
        <div className="havest-icon">
          <button className="btn-havest" onClick={havestPlant} disabled={loading}>
            <img src={havestIcon} />
          </button>

        </div>
      )}
    </LandStyle>
  );
};

export default Land;
