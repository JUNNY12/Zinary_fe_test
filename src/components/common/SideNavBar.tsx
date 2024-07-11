import { useState } from "react"
import { Nav } from "../ui/nav"
import {
    LayoutDashboard,
    Users2,
    Wallet2,
    Users,
    Settings2,
    BadgeDollarSign,
    Banknote,
    BadgePercent,
    BanknoteIcon,
    ChevronRight,
} from "lucide-react"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Button } from "../ui/button"
import {
    useWindowWidth,
} from '@react-hook/window-size'


export default function SideNavBar() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 964

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed)
    }


    return (
        <TooltipProvider>
            <div className="bg-white bg-pattern min-h-screen bg-bottom bg-no-repeat relative min-w-[80px] border-r pb-10 pt-12">

                <div className=" pb-6 mx-4">
                    <div className="flex items-center bg-orange_2 text-white rounded-lg shadow-md px-4 py-2">
                        {
                            !mobileWidth && !isCollapsed && (
                                <span className="flex-grow font-semibold">General <br /> Dashboard</span>
                            )
                        }
                        <div className="flex flex-col">
                            <button className="text-xs">&#9650;</button>
                            <button className="text-xs">&#9660;</button>
                        </div>
                    </div>
                </div>

                {
                    !mobileWidth && (
                        <div className="absolute right-[-20px] top-17">
                            <Button onClick={toggleCollapse} variant={"secondary"} className="rounded-full p-2">
                                <ChevronRight />
                            </Button>
                        </div>
                    )
                }
                <Nav
                    isCollapsed={mobileWidth ? true : isCollapsed}
                    links={[
                        {
                            title: "Dashboard",
                            icon: LayoutDashboard,
                            variant: "ghost",
                            to: "/",
                        },
                        {
                            title: "Loans",
                            icon: BanknoteIcon,
                            variant: "ghost",
                            to: "/loan",
                        },
                        {
                            title: "Transactions",
                            icon: BadgeDollarSign,
                            variant: "ghost",
                            to: "/transactions",
                        },
                        {
                            title: "Users",
                            icon: Users2,
                            variant: "ghost",
                            to: "/users",
                        },
                        {
                            title: "Payments",
                            icon: Banknote,
                            variant: "ghost",
                            to: "/payments",
                        },
                        {
                            title: "Wallet",
                            icon: Wallet2,
                            variant: "ghost",
                            to: "/wallet",
                        },
                        {
                            title: "Staff",
                            icon: Users,
                            variant: "ghost",
                            to: "/staff",
                        },
                        {
                            title: "Audit Trail",
                            icon: BadgePercent,
                            variant: "ghost",
                            to: "/audit-trails",
                        },
                        {
                            title: "Settings",
                            icon: Settings2,
                            variant: "ghost",
                            to: "/settings",
                        },
                    ]}
                />
            </div>
        </TooltipProvider>
    )
}