"use client";

import { getTodos } from "@/apis/todos-no-rls";
import { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    getTodos();
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
