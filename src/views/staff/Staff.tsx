import DashboardTitle from "@/components/common/DashboardTitle"
import { StaffDataTable } from "@/components/specific/staff/StaffDataTable"
import { Separator } from "@/components/ui/separator"
import { staffData } from "@/constants/constants"
import { StaffColumnsData } from "@/constants/StaffColumnsData"

export default function Staff() {
    return (
        <div>
            <div className="mb-6">
                <DashboardTitle title="Staff" />
                <Separator />
            </div>
            <StaffDataTable data={staffData} columns={StaffColumnsData} />
        </div>
    )
}