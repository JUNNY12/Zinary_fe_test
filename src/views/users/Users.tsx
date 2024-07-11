import DashboardTitle from "@/components/common/DashboardTitle"
import { CustomerDataTable } from "@/components/specific/customer/CustomerDataTable"
import { customerData } from "@/constants/constants"
import { customerColumnsData } from "@/constants/CustomerColumnsData"

import { Separator } from "@/components/ui/separator"
export default function Users() {
    return (
        <div>
            <div className="mb-6">
                <DashboardTitle title="Users" />
                <Separator />
            </div>
            <CustomerDataTable data={customerData} columns={customerColumnsData} />
        </div>
    )
}