"use client";
import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface AzureSigninButtonProps {
  children: ReactNode;
}
const AzureSigninButton: FC<AzureSigninButtonProps> = ({ children }) => {
  const onSubmit = async () => {
    const res = await signIn("azure-ad", {
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
      className="w-full mt-4 hover:text-white focus:text-white bg-white flex items-center gap-3"
    >
      <Image
        src={"https://img.icons8.com/?size=512&id=VLKafOkk3sBX&format=png"}
        width={20}
        height={20}
        alt=""
      />
      <span className="font-semibold uppercase text-black">{children}</span>
    </Button>
  );
};

export default AzureSigninButton;
