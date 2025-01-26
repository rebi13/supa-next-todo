"use client";

import TodoList from "@/components/ui/TodoList";
import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  return (
    <div>
      <TodoList sharedUserFullName="test user" owerUserId="123123" />
    </div>
  );
};

export default TodoContainer;
