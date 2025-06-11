import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { LogOut, User } from "lucide-react";

import { isAuthenticated, getCurrentUser } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) redirect("/sign-in");

    const user = await getCurrentUser();

    return (
        <div className="min-h-screen bg-black flex flex-col overflow-x-hidden">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <Image src="/VLogoWhite.png" alt="VettAI Logo" width={32} height={32} />
                            <h2 className="text-xl font-bold text-white">VettAI</h2>
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors">
                                Dashboard
                            </Link>
                            <Link href="/interview/start" className="text-white/80 hover:text-white transition-colors">
                                Start Interview
                            </Link>
                        </div>

                        {/* User Menu */}
                        <div className="flex items-center gap-4">
                            {/* Profile */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary-200 to-primary-100 rounded-full flex items-center justify-center">
                                    <User className="w-4 h-4 text-black" />
                                </div>
                                <div className="hidden sm:block">
                                    <p className="text-sm font-medium text-white">
                                        {(user as any)?.firstName || user?.email?.split('@')[0] || 'User'}
                                    </p>
                                    <p className="text-xs text-white/60">{user?.email}</p>
                                </div>
                            </div>

                            {/* Logout */}
                            <Link href="/sign-out" className="p-2 text-white/60 hover:text-red-400 transition-colors">
                                <LogOut className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-8 flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 mt-auto">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Image src="/VLogoWhite.png" alt="VettAI Logo" width={24} height={24} />
                            <span className="text-white/80 text-sm">© 2024 VettAI. All rights reserved.</span>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <Link href="/help" className="text-white/60 hover:text-white text-sm transition-colors">
                                Help
                            </Link>
                            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;