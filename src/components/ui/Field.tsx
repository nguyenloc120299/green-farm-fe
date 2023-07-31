import { Popover } from 'antd';
import Land from 'components/objects/Land';
import Mark from 'components/objects/Mark';

import { lands } from 'types/land';

const Field = () => {


  return (
    <>
      {lands.map((item, index) => (
        <Land
          row={item.row}
          column={item.col}
          key={index}
        
        >
          {index === 0 && <Mark />}
        </Land>
      ))}
    </>
  );
}

export default Field