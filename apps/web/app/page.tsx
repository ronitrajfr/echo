"use client";

import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);

  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello apps/web</h1>
            <UserButton />
            <Button size="sm" onClick={() => addUser()}>
              ADD
            </Button>
            {JSON.stringify(users)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Please sign in to continue</h1>
            <SignInButton />
          </div>
        </div>
      </Unauthenticated>
    </>
  );
}
