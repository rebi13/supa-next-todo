"use client";

import TodoList from "@/components/ui/TodoList";
import useTodosController from "../hooks/useTodosController";

interface TodoContainerProps {
  sharedUserFullName: string;
  ownerUserId: string;
}

const TodoContainer = ({
  ownerUserId,
  sharedUserFullName,
}: TodoContainerProps) => {
  const {
    loading,
    todos,
    onCreateEmptyTodo,
    onDeleteTodo,
    onSearchTodos,
    onUpdateTodo,
  } = useTodosController(ownerUserId);

  return (
    <div>
      <TodoList
        sharedUserFullName={sharedUserFullName}
        ownerUserId={ownerUserId}
        loading={loading}
        todoListData={todos}
        isReadOnly={true}
        onUpdate={onUpdateTodo}
        onCreate={onCreateEmptyTodo}
        onDelete={onDeleteTodo}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
