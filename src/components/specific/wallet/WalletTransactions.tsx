import { TransactionProps } from "@/components/common/TransactionCard"
import TransactionCard from "@/components/common/TransactionCard"

const TransactionData: TransactionProps[] = [
    {
        description: 'Total Withdrawal',
        amount: 3000000
    },
    {
        description: 'Total Deposit',
        amount: 3000000
    },
    {
        description: 'Total Payments',
        amount: 3000000
    },
    {
        description: 'Total Commission',
        amount: 3000000
    },
    {
        description: 'Total Amount',
        amount: 3000000
    }
]

export default function WalletTransactions() {
    return (
        <section className=" bg-orange_4 bg-pattern bg-left bg-cover bg-no-repeat bg-blend-soft-light flex flex-col gap-4 flex-grow rounded-lg p-4 mobile-md:p-2 w-full">
            {
                TransactionData.map((data, index) => (
                    <TransactionCard key={index} description={data.description} amount={data.amount} />
                ))
            }
        </section>
    )
}