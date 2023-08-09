import Land from "components/objects/Land";
import Mark from "components/objects/Mark";
import { IS_OPEN } from "contants";
import { useFnOpen } from "hooks/useOpen";
import { lands } from "types/land";

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
              type: IS_OPEN.SEEDS,
              value: true,
            });
          }}
        >
          {index === 0 && <Mark />}
        </Land>
      ))}
    </>
  );
};

export default Field;
