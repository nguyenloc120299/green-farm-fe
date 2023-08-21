import ChickenCoop from "components/objects/ChickenCoop";
import Land from "components/objects/Land";
import Tree from "components/objects/TreeApple";
import Field from "components/ui/Field";
import React from "react";

const Home = () => {
  return (
    <>
      <Field />
      <Tree row={14} column={3} />
      <Tree row={14} column={5} />
      <Tree row={14} column={8} />
      <Tree row={14} column={10} />
    </>
  );
};

export default Home;
