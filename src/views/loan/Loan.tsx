import DashboardTitle from "@/components/common/DashboardTitle"
import { LoanDataTable } from "@/components/specific/loan/loanDataTable"
import { LoanColumnsData } from "@/constants/LoanColumnsData"
import { loanData } from "@/constants/constants"
import { Separator } from "@/components/ui/separator"

export default function Loan() {
    return (
        <div>
            <div className="mb-6">
                <DashboardTitle title="Repayments" />
                <Separator />
            </div>
            <LoanDataTable data={loanData} columns={LoanColumnsData} />
        </div>
    )
}