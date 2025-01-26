"use client";

import { getTodoById, getTodos, getTodosBySearch } from "@/apis/todos-no-rls";
import { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    getTodos();
    getTodoById(6);
    getTodosBySearch("study");
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
