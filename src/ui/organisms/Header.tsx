import Link from "next/link";
import { Logo } from "@/ui/atoms/Logo";
import { Navigation } from "@/ui/molecules/Navigation";

export const Header = () => (
	<header className="flex w-full items-center justify-between bg-gray-50 p-8">
		<Link href="/">
			<Logo />
		</Link>
		<Navigation />
		<article className="flex gap-4">
			<></>
		</article>
	</header>
);