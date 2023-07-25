import Land from 'components/objects/Land';
import React from 'react'

const Field = () => {
  return (
    <>
      <Land row={9} column={2} />
      <Land row={9} column={3} />
      <Land row={9} column={4} />
      <Land row={9} column={5} />
      <Land row={10} column={2} />
      <Land row={10} column={3} />
      <Land row={10} column={4} />
      <Land row={10} column={5} />
      <Land row={11} column={2} />
      <Land row={11} column={3} />
      <Land row={11} column={4} />
      <Land row={11} column={5} />
      <Land row={12} column={2} />
      <Land row={12} column={3} />
      <Land row={12} column={4} />
      <Land row={12} column={5} />

      <Land row={9} column={8} />
      <Land row={9} column={9} />
      <Land row={9} column={10} />
      <Land row={9} column={11} />
      <Land row={10} column={8} />
      <Land row={10} column={9} />
      <Land row={10} column={10} />
      <Land row={10} column={11} />
      <Land row={11} column={8} />
      <Land row={11} column={9} />
      <Land row={11} column={10} />
      <Land row={11} column={11} />
      <Land row={12} column={8} />
      <Land row={12} column={9} />
      <Land row={12} column={10} />
      <Land row={12} column={11} />
    </>
  );
}

export default Field