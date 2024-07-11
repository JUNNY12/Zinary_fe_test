import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"
import { formatCurrencyInNaira } from "@/helpers/formatCurrency";


export type TransactionProps = {
    description: string
    amount: number

}

export default function TransactionCard({ description, amount }: TransactionProps) {
    return (
        <Content>
            <h4 className=" text-[12px]">{description}</h4>
            <p className=" font-semibold text-base break-words">{formatCurrencyInNaira(amount)}</p>
            <Separator />
        </Content>
    )
}

export function Content(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <article
            {...props}
            className={cn(" text-white", props.className)}
        />
    );
}
