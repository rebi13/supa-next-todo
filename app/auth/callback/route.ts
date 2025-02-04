import { NextResponse } from "next/server";
import { createServerSideClient } from "@/lib/supabase";

export async function GET(request: Request) {
  const overrideOrigin = process.env.NEXT_PUBLIC_AUTO_REDIRECT_TO_HOME;

  const { searchParams, origin } = new URL(request.url);
  console.log(">>searchParams", searchParams);
  console.log(">>origin", origin);

  const code = searchParams.get("code");
  const next = searchParams.get("next");
  console.log(">>code", code);
  console.log(">>next", next);

  if (code) {
    const supabase = await createServerSideClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code); // 토큰 교환 함수
    if (error) {
      return NextResponse.redirect(`${overrideOrigin}`);
    }

    return NextResponse.redirect(`${overrideOrigin}${next}`);
  }

  return NextResponse.redirect(`${overrideOrigin}`);
}
