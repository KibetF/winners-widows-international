"use client";

import { User } from "@supabase/supabase-js";
import { Bell, User as UserIcon } from "lucide-react";

interface AdminHeaderProps {
  user: User;
}

export function AdminHeader({ user }: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-neutral-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="lg:hidden w-10" /> {/* Spacer for mobile menu button */}

        <div className="flex-1 lg:flex-none">
          <h1 className="text-lg font-heading font-semibold text-neutral-900 hidden lg:block">
            Admin Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-neutral-200">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
              <UserIcon className="w-4 h-4 text-primary-900" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-neutral-900">
                {user.email?.split("@")[0]}
              </p>
              <p className="text-xs text-neutral-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
