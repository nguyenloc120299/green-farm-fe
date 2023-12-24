import Land from "components/objects/Land";
import Mark from "components/objects/Mark";
import { TYPE_MODAL, plants } from "contants";
import { useFnOpen } from "hooks/useOpen";
import Lock from "components/objects/LockLand";
import { useAppDispatch, useAppSelector } from "store";
import { onSetLandId } from "store/user";
import { Category_Land } from "types/land";
import Seed from "components/objects/Seed";
const Field = () => {
  const { onOpen } = useFnOpen();
  const { land, user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <>
      {land?.map((item, index) => (
        <Land
          status={item?.category}
          row={item.row}
          column={item.col}
          key={index}
          landItem={item}
          onClick={() => {
            if (item?.category === Category_Land.NO_PLANT) {
              onOpen({
                type: TYPE_MODAL.SEEDS,
                value: true,
              });
              dispatch(onSetLandId(item?.id));
            }
          }}
        >
          {!item?.status && user && user.landNotBuy !== index && <Lock />}
          {index === user?.landNotBuy && <Mark />}

          {
            item?.category === Category_Land.PLANTING &&
            <Seed imgPlant={plants.find(i => i.id === item?.plant_id)?.img as string} />
          }

        </Land>
      ))}
    </>
  );
};

export default Field;
