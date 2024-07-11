import React from "react"
import DashboardTitle from "@/components/common/DashboardTitle"

import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export default function WalletHeader() {
    const [date, setDate] = React.useState<Date>()
    return (
        <div className="mb-6">
            <div className=" flex justify-between pb-6 mobile-lg:flex-col mobile-lg:items-start mobile-lg:gap-y-2 items-center">
                <DashboardTitle title="Wallet Overview" />
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[180px] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >

                            <span className="flex justify-between w-full text-black_1">
                                {date ? format(date, "PPP") : <span>Today</span>}
                                <span><ChevronDown /></span>
                            </span>

                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <Separator />
        </div>

    )
}