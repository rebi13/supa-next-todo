"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";
import { FcGoogle, FcTodoList } from "react-icons/fc";

interface AuthHeaderProps {
  user?: User | null;
}

const AuthHeader = ({ user }: AuthHeaderProps) => {
  const isLoggedIn = !!user?.email;
  const supabase = createSupabaseBrowserClient();
  const router = useRouter(); // app router -> next/navigation

  const goToHome = () => {
    router.push("/");
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <header className="h-12 bg-white">
      <section className="px-6 h-full">
        <div className="flex flex-row justify-between items-center h-full">
          <div
            onClick={goToHome}
            className="flex flex-row items-center cursor-pointer gap-2"
          >
            TODO <FcTodoList size={30} />
          </div>
          {isLoggedIn ? (
            <div
              onClick={handleLogout}
              className="flex flex-row items-center gap-2"
            >
              Logout
              <AiOutlineLogout size={30} />
            </div>
          ) : (
            <div
              onClick={handleGoogleLogin}
              className="flex flex-row items-center gap-2"
            >
              Login
              <FcGoogle size={30} />
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default AuthHeader;
