"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { signOut } from "next-auth/react";

const UserAccoentButton = ({ email }: { email: string }) => {
  return (
    <div className="flex gap-3 items-center justify-between">
      <Button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`,
          })
        }
      >
        sign out
      </Button>
      <Link href="/admin">{email}</Link>
    </div>
  );
};

export default UserAccoentButton;
