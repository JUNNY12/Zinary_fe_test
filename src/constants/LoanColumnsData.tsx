import { ColumnDef } from "@tanstack/react-table"
import { formatCurrencyInNaira } from "@/helpers/formatCurrency";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export type LoanDataItem = {
    transactionId: string;
    customer: string;
    loanId: string;
    amount: number;
    disbursment: string;
    dateRegistered: string;
}

export const LoanColumnsData: ColumnDef<LoanDataItem>[] = [
    {
        accessorKey: "transactionId",
        header: "Transaction Id",
    },
    {
        accessorKey: "customer",
        header: "Customer",
    },
    {
        accessorKey: "loanId",
        header: "Loan Id",
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
        accessorKey: "disbursment",
        header: "Disbursment",
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
                            Copy Transaction Id
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Copy Loan Id
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View staff</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
