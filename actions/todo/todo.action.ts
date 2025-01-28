"use server";
import { createServerSideClient } from "@/lib/supabase";

// 서버에서만 작동되는 모듈임을 명시

export const getTodoAction = async () => {
  console.log("pingAction income");
  const supabase = await createServerSideClient();

  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", {
      ascending: false,
    });

  console.log("getTodoAction income", result);

  return result.data;
};
