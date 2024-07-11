import { DataItem } from "@/components/common/TableComponent"
import { cn } from "@/lib/utils"
import { formatCurrencyInNaira } from "@/helpers/formatCurrency"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const columnsData: ColumnDef<DataItem>[] = [
    {
        accessorKey: 'sn',
        header: 'S/N',
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: 'transactionReference',
        header: 'Transaction Reference',
    },
    {
        accessorKey: 'type',
        header: 'Type',
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = formatCurrencyInNaira(amount)
            return formatted
        },
    },
    {
        accessorKey: 'date',
        header: ({ column }) => {
            return (
                <Button
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: 'status',
        header: ({ column }) => {
            return (
                <Button
                    variant="sortButton"
                    className="text-center"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <div className={cn("font-medium text-white text-center p-1 rounded-xl", {
                    "bg-success": row.getValue("status") === "Successful",
                    "bg-failed": row.getValue("status") === "Failed",
                    "bg-pending": row.getValue("status") === "Pending",
                })}>
                    <span className=" inline-block h-2 w-2 rounded-full mr-1 bg-white"></span>
                    <span> {row.getValue("status")}</span>
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
                            Copy Transaction Reference
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },


]