import Land from "components/objects/Land";
import Mark from "components/objects/Mark";
import Seed from "components/objects/Seed";
import { TYPE_MODAL } from "contants";
import { useFnOpen } from "hooks/useOpen";
import havertIcon from "assets/mipmap-xxxhdpi-v4/home_qipao_1.png";
import { lands } from "types/land";
import Lock from "components/objects/LockLand";

const Field = () => {
  const { onOpen } = useFnOpen();
  return (
    <>
      {lands.map((item, index) => (
        <Land
          row={item.row}
          column={item.col}
          key={index}
          onClick={() => {
            onOpen({
              type: TYPE_MODAL.SEEDS,
              value: true,
            });
          }}
        >
          {index < 4 && <Seed />}
          {index === 4 && <Mark />}
          {index > 4 && <Lock />}
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
