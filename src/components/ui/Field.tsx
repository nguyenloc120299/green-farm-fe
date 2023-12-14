import Land from "components/objects/Land";
import Mark from "components/objects/Mark";
import { TYPE_MODAL } from "contants";
import { useFnOpen } from "hooks/useOpen";
import Lock from "components/objects/LockLand";
import { useAppSelector } from "store";

const Field = () => {
  const { onOpen } = useFnOpen();
  const { land, user } = useAppSelector((state) => state.user);

  return (
    <>
      {land?.map((item, index) => (
        <Land
          status={item?.status}
          row={item.row}
          column={item.col}
          key={index}
          onClick={() => {
            if (!item?.status) return;
            onOpen({
              type: TYPE_MODAL.SEEDS,
              value: true,
            });
          }}
        >
          {!item?.status && user && user.landNotBuy !== index && <Lock />}
          {index === user?.landNotBuy && <Mark />}
          {/* {index < 4 && <Seed />}
          {index === 4 && <Mark />}
          {index > 4 && <Lock />} */}
          <div className="havert">
            {/* <img src={havertIcon} /> */}
            {/* <div className="time-end">00:50</div> */}
          </div>
        </Land>
      ))}
    </>
  );
};

export default Field;
