"use client";
import { TodoDto } from "@/app/todo-no-rls/hooks/useTodosController";
import { IoSearchOutline, IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";
import TodoListItem from "./TodoListItem";
import { useState } from "react";
import TodoListItemReadOnly from "./TodoListItemReadOnly";

interface TodoListProps {
  sharedUserFullName?: string;
  ownerUserId: string;
  loading: boolean;
  todoListData: TodoDto[];
  isReadOnly: boolean;
  onUpdate: (id: number, content: string) => void;
  onCreate: () => void;
  onDelete: (id: number) => void;
  onSearch: (terms: string) => void;
}

const TodoList = ({
  sharedUserFullName = "",
  ownerUserId = "",
  loading = false,
  todoListData = [],
  isReadOnly = false,
  onUpdate = () => {},
  onCreate = () => {},
  onDelete = () => {},
  onSearch = () => {},
}: TodoListProps) => {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => {
    const sharedLink = `${process.env.NEXT_PUBLIC_AUTO_REDIRECT_TO_HOME}/share/${ownerUserId}`;
    copy(text)
      .then(() => {
        window.alert(`공유링크 복사 완료! \n ${sharedLink}`);
        console.log("Copied", { sharedLink });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  const handleSearchEnd = () => {
    onSearch(userSearchInput);
    setUserSearchInput("");
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
        {!isReadOnly && (
          <article className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="flex flex-1 h-16">
              <input
                value={userSearchInput}
                onChange={(e) => setUserSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchEnd();
                  }
                }}
                className="p-4 flex-1 bg-[#F7CB66] border border-black rounded-l-2xl font-bold"
              ></input>
              <div
                onClick={() => handleSearchEnd()}
                className="w-16 flex justify-center items-center bg-black rounded-r-2xl cursor-pointer"
              >
                <IoSearchOutline size={40} color="#FFFFFF" />
              </div>
            </div>
            <div
              onClick={onCreate}
              className="h-16 w-48 flex justify-center items-center bg-[#7EBB95] border border-black rounded-2xl font-bold cursor-pointer text-base"
            >
              New Task
            </div>
          </article>
        )}

        <div className="h-1 my-10 bg-black"></div>
        {todoListData?.length >= 1 ? (
          <ul className="flex flex-col gap-6">
            {todoListData?.map((todo) => {
              if (isReadOnly)
                return <TodoListItemReadOnly key={todo?.id} todo={todo} />;
              return (
                <TodoListItem
                  key={todo?.id}
                  todo={todo}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              );
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
