import { LogOut, User, UserCircle } from "lucide-react";
import { Button } from "@/Components/ui/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/Components/ui/DropdownMenu";
import { Link } from "@inertiajs/react";

export default function ProfileControls({ user }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="lg:w-auto w-full" asChild>
                <Button variant="outline" className="gap-2">
                    <UserCircle /> {user.firstname}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>
                    <span className="opacity-80">
                        {user.firstname} {user.lastname}
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                    <span className="opacity-80">{user.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={route("profile.edit")}>
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <Link method="post" href={route("logout")}>
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
