import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
const BLUR_FADE_DELAY = 0.04;

export default function Navbar() {
	return (
		<div className="pointer-events-none inset-x-0 bottom-0  mb-6 flex h-full max-h-14">
			<div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent    dark:bg-background"></div>
			<Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background border-none ">
				{Object.entries(DATA.contact.social)
					.filter(([_, social]) => social.navbar)
					.map(([name, social]) => (
						<DockIcon key={name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={social.url}
										className={cn(
											buttonVariants({ variant: "ghost", size: "icon" }),
											"size-12"
										)}>
										<social.icon className="size-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{name}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}

				<Separator
					orientation="vertical"
					className="mx-2 h-6 bg-black/60 dark:bg-white/60"
				/>

				
				<DockIcon>
					<Tooltip>
						<TooltipTrigger asChild>
							<ModeToggle />
						</TooltipTrigger>
						<TooltipContent>
							<p>Theme</p>
						</TooltipContent>
					</Tooltip>
				</DockIcon>
				{DATA.navbar.map((item) => (
					<DockIcon key={item.href}>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={item.href}
									className={cn(
										buttonVariants({ variant: "ghost", size: "icon" }),
										"size-12"
									)}>
									<item.icon className="size-4" />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>{item.label}</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				))}
			</Dock>
		</div>
	);
}
