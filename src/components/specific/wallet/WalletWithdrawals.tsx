import { CardProps } from '@/components/common/Card'
import Card from '@/components/common/Card'
import { formatCurrencyInNaira } from '@/helpers/formatCurrency'

const CardData: CardProps[] = [
    {
        label: 'Withdrawal',
        amount: 3000000,
        description: '722 cases',
        icon: '₦'
    },
    {
        label: 'Withdrawal',
        amount: 3000000,
        description: '722 cases',
        icon: '₦'
    },
    {
        label: 'Withdrawal',
        amount: 3000000,
        description: '722 cases',
        icon: '₦'
    },
    {
        label: 'Withdrawal',
        amount: 3000000,
        description: '722 cases',
        icon: '₦'
    },

]

export default function WalletWithdrawals() {
    return (
        <section className='bg-white rounded-lg p-4 mobile-md:p-2 flex flex-col h-full'>
            <div className='grid grid-cols-2 mobile-md:grid-cols-1 gap-4 mobile-md:gap-2 mb-4 flex-grow'>
                {CardData.map((data, index) => (
                    <Card
                        key={index}
                        label={data.label}
                        amount={data.amount}
                        description={data.description}
                        icon={data.icon}
                    />
                ))}
            </div>
            <div className='flex justify-between flex-wrap p-4 mobile-md:p-2 bg-black_1 font-semibold text-white rounded-lg mt-auto'>
                <p className=''>Total Amount</p>
                <p>{formatCurrencyInNaira(4000000)}</p>
            </div>
        </section>
    )
}