import {
  createTodo,
  deleteTodoSoft,
  getTodos,
  getTodosBySearch,
  updateTodo,
} from "@/apis/todos-no-rls";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";

type TodoDto = Database["public"]["Tables"]["todos_no_rls"]["Row"];

const useTodosController = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<TodoDto[]>([]);

  const onGetTodos = async () => {
    setLoading(true);
    try {
      const resultTodos = await getTodos();
      if (resultTodos) setTodos(resultTodos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onGetTodos();
  }, []);

  // 비어있는 todo 생성
  const onCreateEmptyTodo = async () => {
    await createTodo("");
    await onGetTodos();
  };

  // todo 업데이트
  const onUpdateTodo = async (id: number, content: string) => {
    await updateTodo(id, content);
    await onGetTodos();
  };

  // todo 삭제
  const onDeleteTodo = async (id: number) => {
    await deleteTodoSoft(id);
    await onGetTodos();
  };

  // todo 검색
  const onSearchTodos = async (terms: string) => {
    if (terms) {
      const resultTodosBySearch = await getTodosBySearch(terms);
      if (resultTodosBySearch) setTodos(resultTodosBySearch);
    } else {
      await onGetTodos();
    }
  };

  return {
    loading,
    todos,
    onCreateEmptyTodo,
    onUpdateTodo,
    onDeleteTodo,
    onSearchTodos,
  };
};

export default useTodosController;
