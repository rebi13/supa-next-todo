"use server";
import { createServerSideClient } from "@/lib/supabase";

// 서버에서만 작동되는 모듈임을 명시

// todoList 가져오기
export const getTodos = async () => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", {
      ascending: false,
    });

  return result.data;
};

// todoList 가져오기 + by Id
export const getTodoById = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);
  return result.data;
};

// todoList 가져오기 + by userId
export const getTodoByUserId = async (userId: string) => {
  const supabase = await createServerSideClient(true);
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("user_id", userId);
  return result.data;
};

// todoList 가져오기 + by content
export const getTodosBySearch = async (terms: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`)
    .order("id", { ascending: false });

  return result.data;
};

// todoList 생성하기
export const createTodo = async (content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .insert({
      content,
    })
    .select();
  console.log("result", result);

  return result.data;
};

// todoList 수정하기
export const updateTodo = async (id: number, content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .update({
      content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  return result.data;
};

// todoList Soft 삭제
export const deleteTodoSoft = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .update({
      deleted_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  return result.data;
};

// todoList Hard 삭제
export const deleteTodoHard = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase.from("todos_with_rls").delete().eq("id", id);

  return result.data;
};
