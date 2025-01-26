"use client";

import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  console.log(">> loading", loading);
  console.log(">>todos", todos);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
