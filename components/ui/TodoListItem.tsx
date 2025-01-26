import { TodoDto } from "@/app/todo-no-rls/hooks/useTodosController";

interface TodoListItemProps {
  todo: TodoDto;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
  return <li>{todo?.content}</li>;
};

export default TodoListItem;
