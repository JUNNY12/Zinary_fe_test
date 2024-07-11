import { NavLink } from "react-router-dom"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface NavProps {
    isCollapsed: boolean
    links: {
        title: string
        label?: string
        icon: LucideIcon
        variant: "default" | "ghost"
        to: string
    }[]
}

export function Nav({ links, isCollapsed }: NavProps) {
    return (
        <div
            data-collapsed={isCollapsed}
            className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
        >
            <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 text-black_1">
                {links.map((link, index) =>
                    isCollapsed ? (
                        <Tooltip key={index} delayDuration={0}>
                            <TooltipTrigger asChild>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        cn(
                                            "flex items-center hover:bg-orange_1 p-2 px-5",
                                            isActive && "text-black_1"
                                        )
                                    }
                                >
                                    <link.icon className="" />
                                    <span className="sr-only">{link.title}</span>
                                </NavLink>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="flex items-center gap-4">
                                {link.title}
                                {link.label && (
                                    <span className="ml-auto text-muted-foreground">
                                        {link.label}
                                    </span>
                                )}
                            </TooltipContent>
                        </Tooltip>
                    ) : (
                        <NavLink
                            key={index}
                            to={link.to}
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center hover:bg-orange_1 p-2 px-12",
                                    isActive && "border-l-4 border-orange-500 bg-orange_1 text-black_1 font-semibold"
                                )
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <link.icon className={cn("mr-2 ", isActive && "text-orange_2")} />
                                    {link.title}
                                    {link.label && (
                                        <span
                                            className={cn(
                                                "ml-auto",
                                                link.variant === "default" &&
                                                "text-background dark:text-white"
                                            )}
                                        >
                                            {link.label}
                                        </span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    )
                )}
            </nav>
        </div>
    )
}
