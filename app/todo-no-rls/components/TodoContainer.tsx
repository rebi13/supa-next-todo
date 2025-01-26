"use client";

import {
  createTodo,
  deleteTodoSoft,
  getTodoById,
  getTodos,
  getTodosBySearch,
  updateTodo,
} from "@/apis/todos-no-rls";
import { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    // createTodo("next.js에서 todo를 생성함");
    // getTodos();
    // getTodoById(6);
    // getTodosBySearch("study");
    // deleteTodoSoft(8);
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
