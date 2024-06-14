"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function NavbarRoutes() {
  const pathname = usePathname();

  const isPlayerMode = pathname?.startsWith("/teacher");
  const isTeacherMode = pathname?.startsWith("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isPlayerMode || isTeacherMode ? (
        <Link href={"/"}>
          <Button variant={"ghost"} size={"sm"}>
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={"/teacher/courses"}>
          <Button variant={"ghost"} size={"sm"}>
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
}
