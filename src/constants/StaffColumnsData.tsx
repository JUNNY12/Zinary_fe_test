import { ColumnDef } from "@tanstack/react-table"
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export type StaffDataItem = {
    staffId: string;
    name: string;
    email: string;
    phoneNumber: number;
    department: string;
    status: string;
}

export const StaffColumnsData: ColumnDef<StaffDataItem>[] = [
    {
        accessorKey: "staffId",
        header: "staff ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phoneNumber",
        header: "Phone Number",
    },
    {
        accessorKey: "department",
        header: "Department",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return (
                <div className={cn("font-medium text-white text-center p-1 rounded-xl", {
                    "bg-success": row.getValue("status") === "Active",
                    "bg-failed": row.getValue("status") === "Inactive",
                })}>
                    <span className="inline-block h-2 w-2 rounded-full mr-1 bg-white"></span>
                    <span>{row.getValue("status")}</span>
                </div>
            )
        },
    },
    {
        id: "actions",
        cell: () => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="bg-orange_4 cursor-pointer text-center p-1 font-semibold text-white rounded-lg">View</div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            Copy staff Id
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View staff</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
