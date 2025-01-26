import { TodoDto } from "@/app/todo-no-rls/hooks/useTodosController";
import { IoSearchOutline, IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  sharedUserFullName: string;
  ownerUserId: string;
  loading: boolean;
  todoListData: TodoDto[];
}

const TodoList = ({
  sharedUserFullName = "",
  ownerUserId = "",
  loading = false,
  todoListData = [],
}: TodoListProps) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => {
    const sharedLink = `${"toodList공유할 링크"}/share/${ownerUserId}`;
    copy(text)
      .then(() => {
        window.alert(`공유링크 복사 완료! \n ${sharedLink}`);
        console.log("Copied", { sharedLink });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <section className=" min-h-[70vh] bg-[#69CFCF]">
      <div className="w-full max-w-3xl p-5 mx-auto">
        <article className="flex flex-row justify-between items-center">
          <div className="font-bold text-3xl">
            {sharedUserFullName && <div>{sharedUserFullName}</div>}
            Things to do:
          </div>
          {ownerUserId && (
            <div
              onClick={() => handleCopy("test")}
              className="flex flex-row items-center font-bold text-2xl cursor-pointer"
            >
              Share
              <IoShareSocialOutline />
            </div>
          )}
        </article>
        <article className="flex flex-col sm:flex-row gap-4 mt-8">
          <div className="flex flex-1 h-16">
            <input className="p-4 flex-1 bg-[#F7CB66] border border-black rounded-l-2xl font-bold"></input>
            <div className="w-16 flex justify-center items-center bg-black rounded-r-2xl cursor-pointer">
              <IoSearchOutline size={40} color="#FFFFFF" />
            </div>
          </div>
          <div className="h-16 w-48 flex justify-center items-center bg-[#7EBB95] border border-black rounded-2xl font-bold cursor-pointer text-base">
            New Task
          </div>
        </article>
        <div className="h-1 my-10 bg-black"></div>
        {todoListData?.length >= 1 ? (
          <ul>
            {todoListData?.map((todo) => {
              return <TodoListItem key={todo?.id} todo={todo} />;
            })}
          </ul>
        ) : (
          <div>{loading ? "Loading..." : "Empty"}</div>
        )}
      </div>
    </section>
  );
};

export default TodoList;
