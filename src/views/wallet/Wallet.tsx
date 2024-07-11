import WalletHeader from "@/components/specific/wallet/WalletHeader"
import WalletWithdrawals from "@/components/specific/wallet/WalletWithdrawals"
import WalletTransactions from "@/components/specific/wallet/WalletTransactions"
import WalletRealTimeUpdate from "@/components/specific/wallet/WalletRealTimeUpdate"
import AllTransactionTable from "@/components/specific/wallet/AllTransactionTable"

export default function Wallet() {
    return (
        <section>
            <WalletHeader />
            <div className="grid grid-cols-11 lg:grid-cols-6 gap-8 h-full">
                <div className="col-span-4 lg:col-span-3 tablet:col-span-6 flex flex-col">
                    <WalletWithdrawals />
                </div>
                <div className="col-span-2 lg:col-span-3 tablet:col-span-6 flex flex-col">
                    <WalletTransactions />
                </div>
                <div className="col-span-5 lg:col-span-6 tablet:col-span-6 flex flex-col">
                    <WalletRealTimeUpdate />
                </div>
            </div>
            <div>
                <AllTransactionTable />
            </div>
        </section>
    )
}
