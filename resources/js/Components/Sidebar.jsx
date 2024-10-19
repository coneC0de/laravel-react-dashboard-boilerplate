import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/Card";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    CupSoda,
    LayoutDashboard,
    MenuSquare,
    ShoppingBag,
} from "lucide-react";
import { Button } from "@/Components/ui/Button";
import { cn } from "@/Utils/classNames";
import ProfileControls from "./ProfileControls";

//Logo imports
import UsersLogo from "@/Pages/Users/UsersLogo";
import ProjectsLogo from "@/Pages/Projects/ProjectsLogo";
import TasksLogo from "@/Pages/Tasks/TasksLogo";

const APP_NAME = import.meta.env.VITE_APP_NAME;

const links = [
    { title: "Dashboard", routeName: "dashboard", icon: <LayoutDashboard /> },
    { title: "Korisnici", routeName: "users.index", icon: <UsersLogo /> },
    { title: "Projekti", routeName: "projects.index", icon: <ProjectsLogo /> },
    { title: "Zadaci", routeName: "tasks.index", icon: <TasksLogo /> },
];

export default function Sidebar({ open, auth }) {
    return (
        <aside
            className={cn(
                "sidebar fixed shadow top-0 bottom-0 left-0 z-20 ease-in-out duration-300",
                open ? "-translate-x-0" : "-translate-x-full"
            )}
        >
            <Card className="w-[16rem] h-screen flex flex-col overflow-y-auto m-0 border-t-0 border-b-0 border-l-0">
                <CardHeader className="pl-4">
                    <CardTitle>
                        <Link href="/" className="flex gap-2 items-center">
                            <ApplicationLogo className="block h-8 w-auto fill-current" />
                            {APP_NAME}
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent className="h-full p-4">
                    <div className="flex flex-col gap-10">
                        {links.map((link) => (
                            <Button
                                size="lg"
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start text-base gap-4 px-2 relative",
                                    route().current(link.routeName) &&
                                        "before:bg-black dark:before:bg-white before:rounded-md before:w-1 before:h-full before:absolute before:-left-4 before:top-0"
                                )}
                                asChild
                                key={link.title}
                            >
                                <div>
                                    {link.icon}
                                    <Link href={route(link.routeName)}>
                                        {link.title}
                                    </Link>
                                </div>
                            </Button>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="lg:hidden flex flex-col">
                    <ProfileControls user={auth.user} />
                </CardFooter>
            </Card>
        </aside>
    );
}
