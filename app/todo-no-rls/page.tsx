import { sleep } from "@/lib/utils";
import TodoContainer from "./components/TodoContainer";

const page = async () => {
  //   throw new Error("custom error");
  // await sleep(1500);
  return (
    <div>
      <TodoContainer />
    </div>
  );
};

export default page;
