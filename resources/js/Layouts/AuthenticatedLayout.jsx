import { useState } from "react";
import ProfileControls from "@/Components/ProfileControls";
import { ModeToggle } from "@/Components/ModeToggle";
import { Button } from "@/Components/ui/Button";
import { Menu, X } from "lucide-react";
import Sidebar from "@/Components/Sidebar";
import { Separator } from "@/Components/ui/separator";
import { cn } from "@/Utils/classNames";

export default function AuthenticatedLayout({ auth, header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex w-full bg-white dark:bg-black">
            <Sidebar open={sidebarOpen} auth={auth} />

            <main
                className={cn(
                    "main w-full lg:pl-64 duration-150 ease-in",
                    sidebarOpen ? "blur-sm lg:blur-none" : "blur-none"
                )}
            >
                {header && (
                    <header className="bg-white dark:bg-black sticky top-0 w-full">
                        <div className="text-xl lg:text-2xl font-bold mx-auto w-full py-6 pl-4">
                            {header}
                        </div>
                        <Separator />
                    </header>
                )}
                <div className="mx-auto w-full p-2 min-h-screen">
                    {children}
                </div>
            </main>
            <div className="fixed right-2 z-10 top-4 flex gap-4">
                <div className={cn("lg:flex hidden gap-4")}>
                    <ProfileControls user={auth.user} />
                </div>
                <ModeToggle />

                <Button
                    size="icon"
                    variant="outline"
                    className="lg:hidden md:block"
                    onClick={() => {
                        setSidebarOpen((prev) => !prev);
                    }}
                >
                    {sidebarOpen ? (
                        <X className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                        <Menu className="h-[1.2rem] w-[1.2rem]" />
                    )}
                </Button>
            </div>
        </div>
    );
}
