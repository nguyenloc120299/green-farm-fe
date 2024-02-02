import Tree from "components/objects/TreeApple";
import Field from "components/ui/Field";

const Home = () => {
  return (
    <>
      <Field />
      <Tree row={14} column={2} />
      <Tree row={14} column={5} />
      <Tree row={14} column={8} />
      <Tree row={14} column={11} />
    </>
  );
};

export default Home;
