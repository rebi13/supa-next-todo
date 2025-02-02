"use client";

import { TodoDto } from "@/app/todo-no-rls/hooks/useTodosController";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiCircleCheck, CiEdit } from "react-icons/ci";

interface TodoListItemReadOnlyProps {
  todo: TodoDto;
}

const TodoListItemReadOnly = ({ todo }: TodoListItemReadOnlyProps) => {
  return (
    <li className="min-h-16 bg-[#B280D9] border border-black rounded-2xl font-bold group">
      <article className="min-h-16 p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 text-lg">{todo?.content}</div>
      </article>
    </li>
  );
};

export default TodoListItemReadOnly;
