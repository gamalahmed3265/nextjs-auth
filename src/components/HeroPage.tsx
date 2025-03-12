// pages/index.tsx (or app/page.tsx)
import { CheckCheck, LogIn, UserIcon } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const HeroPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-brflex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Test Authentication with Next.js
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl mb-8">
          Securely test and implement authentication in your Next.js app with
          ease. Explore OAuth, credentials, and session management powered by
          NextAuth and Prisma.
        </p>

        {/* Icons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Secure Login */}
          <div className="flex flex-col items-center">
            <LogIn className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">Secure Login</h3>
            <p className="text-sm">
              Protect your app with robust authentication flows.
            </p>
          </div>

          {/* Feature 2: User Management */}
          <div className="flex flex-col items-center">
            <UserIcon className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">User Management</h3>
            <p className="text-sm">
              Handle user data effortlessly with Prisma integration.
            </p>
          </div>

          {/* Feature 3: Trusted Security */}
          <div className="flex flex-col items-center">
            <CheckCheck className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold">Trusted Security</h3>
            <p className="text-sm">
              Leverage Next.js and OAuth for reliable protection.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <Link href="/sign-in" className={`${buttonVariants()}`}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
