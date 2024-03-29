import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export const Navigation = () => {
    return (
        <nav className="flex gap-4">
            <ActiveLink href="/" exact>Home</ActiveLink>
            <ActiveLink href={"/products" as Route}>All</ActiveLink>
        </nav>
    );
}