import Tree from "components/objects/TreeApple";
import Field from "components/ui/Field";

const Home = () => {
  return (
    <>
      <Field />
      <Tree row={15} column={3} />
      <Tree row={15} column={5} />
      <Tree row={15} column={8} />
      <Tree row={15} column={10} />
    </>
  );
};

export default Home;
