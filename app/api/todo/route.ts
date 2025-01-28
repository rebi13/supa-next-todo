import { getTodoAction } from "@/actions/todo/todo.action";
import { createServerSideClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

// todoList 가져오기
export const GET = async () => {
  const result = getTodoAction();

  console.log("todo GET API income", result);
  return NextResponse.json({ ...result });
};

// // todoList 가져오기 + by Id
// export const getTodoById = async (id: number) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from("todos_no_rls")
//     .select("*")
//     .is("deleted_at", null)
//     .eq("id", id);
//   return result.data;
// };

// // todoList 가져오기 + by content
// export const getTodosBySearch = async (terms: string) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from("todos_no_rls")
//     .select("*")
//     .is("deleted_at", null)
//     .ilike("content", `%${terms}%`)
//     .order("id", { ascending: false });

//   return result.data;
// };

// // todoList 생성하기
// export const createTodo = async (content: string) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from("todos_no_rls")
//     .insert({
//       content,
//     })
//     .select();

//   return result.data;
// };

// // todoList 수정하기
// export const updateTodo = async (id: number, content: string) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from("todos_no_rls")
//     .update({
//       content,
//       updated_at: new Date().toISOString(),
//     })
//     .eq("id", id)
//     .select();

//   return result.data;
// };

// // todoList Soft 삭제
// export const deleteTodoSoft = async (id: number) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from("todos_no_rls")
//     .update({
//       deleted_at: new Date().toISOString(),
//     })
//     .eq("id", id)
//     .select();

//   return result.data;
// };

// // todoList Hard 삭제
// export const deleteTodoHard = async (id: number) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase.from("todos_no_rls").delete().eq("id", id);

//   return result.data;
// };
