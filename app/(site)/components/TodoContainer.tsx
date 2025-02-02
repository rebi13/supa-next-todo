"use client";

import TodoList from "@/components/ui/TodoList";
import useTodosController from "../hooks/useTodosController";

interface TodoContainerProps {
  ownerUserId: string;
}

const TodoContainer = ({ ownerUserId }: TodoContainerProps) => {
  const {
    loading,
    todos,
    onCreateEmptyTodo,
    onDeleteTodo,
    onSearchTodos,
    onUpdateTodo,
  } = useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFullName="test user"
        ownerUserId={ownerUserId}
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={onUpdateTodo}
        onCreate={onCreateEmptyTodo}
        onDelete={onDeleteTodo}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
