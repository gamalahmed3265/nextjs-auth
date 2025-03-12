"use client";
import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const onSubmit = async () => {
    const res = await signIn("google", {
      redirect: false,
      callbackUrl: "/",
    });
    console.log("---------");
    console.log(res);

    console.log("---------");
  };
  return (
    <Button
      onClick={onSubmit}
      className="w-full bg-white flex items-center gap-3"
    >
      <Image
        src={"https://authjs.dev/img/providers/google.svg"}
        width={20}
        height={20}
        alt=""
      />
      <span className="font-semibold uppercase text-black">{children}</span>
    </Button>
  );
};

export default GoogleSignInButton;
