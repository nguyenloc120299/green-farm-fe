import { useRef } from "react";
import { useFnOpen, useOpen } from "hooks/useOpen";
import useClickOutSide from "hooks/useClickOutSide";
import { TYPE_LOADING, TYPE_MODAL, plants } from "contants";
import { formatNumber } from "utils/formatValue";
import { SeedBoxStyles } from "globalStyles/land";
import { useAppDispatch, useAppSelector } from "store";
import { buyPlant } from "api/user";
import { StatusCode } from "api/core";
import { useFnLoading, useLoading } from "hooks/useLoading";
import { setMessage } from "store/app";
import { setMyLand, setUser } from "store/user";

const SeedsBox = () => {
  const refDisplay = useRef<any>();
  const { onOpen } = useFnOpen();
  const isOpen = useOpen(TYPE_MODAL.SEEDS);
  const { landId, land, user } = useAppSelector((state) => state.user);
  const { onLoading } = useFnLoading();
  const loading = useLoading(TYPE_LOADING.APP);
  const dispatch = useAppDispatch();
  useClickOutSide(
    refDisplay,
    () =>
      isOpen &&
      onOpen({
        type: TYPE_MODAL.SEEDS,
        value: false,
      })
  );

  const onPlant = async (plant_id: number) => {
    onLoading({
      type: TYPE_LOADING.APP,
      value: true,
    });
    try {
      if (!landId) throw new Error("Không tìm thấy ô đất này");
      const data = await buyPlant({
        land_id: landId,
        plant_id,
      });
      if (data.statusCode === StatusCode.SUCCESS) {
        const newData = land.map((l) =>
          l?.land_id === data.data?.landResult?.land_id ? data.data?.landResult : l
        );

        dispatch(setUser({
          myland: newData,
          userData: {
            landNotBuy: user?.landNotBuy, ...data.data?.user
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
  };
  return (
    <>
      {isOpen && (
        <SeedBoxStyles ref={refDisplay}>
          <div className="body">
            {plants.map((plant) => (
              <button
                className="seed"
                key={plant.id}
                onClick={() => onPlant(plant.id)}
                disabled={loading}
              >
                <img src={plant.img} alt={plant.name.translated} />
                <div className="quantity">{formatNumber(plant.price)}</div>
              </button>
            ))}
          </div>
        </SeedBoxStyles>
      )}
    </>
  );
};

export default SeedsBox;
