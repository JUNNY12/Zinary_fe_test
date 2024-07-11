import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import RootLayout from "@/layout/root_layout"
import Dashboard from "@/views/dashboard/Dashboard"
import Wallet from "@/views/wallet/Wallet"
import Payments from "@/views/payments/Payments"
import AuditTrails from "@/views/auditTtrails/AuditTrails"
import Users from "@/views/users/Users"
import Settings from "@/views/settings/Settings"
import Staff from "@/views/staff/Staff"
import Transactions from "@/views/transactions/Transactions"
import Loan from "@/views/loan/Loan"

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="payments" element={<Payments />} />
            <Route path="audit-trails" element={<AuditTrails />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="staff" element={<Staff />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="loan" element={<Loan />} />
        </Route>
    )
)


export default routes