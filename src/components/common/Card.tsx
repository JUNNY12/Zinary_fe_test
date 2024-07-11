import { cn } from "@/lib/utils";
import React from "react";
import { formatCurrencyInNaira } from "@/helpers/formatCurrency";

export type CardProps = {
    label: string;
    amount: number;
    description: string;
    icon: string;
};

export default function Card({ label, amount, description }: CardProps) {
    return (
        <CardContent className="bg-orange_3">
            <header>
                <h3 className="mb-2 text-black_1  text-[12px] font-semibold">{label}</h3>
            </header>
            <section>
                <p className="text-md w-full break-words font-semibold text-orange_2">{formatCurrencyInNaira(amount)}</p>
                <p className="text-black_1">{description}</p>
            </section>
        </CardContent>
    );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <article
            {...props}
            className={cn("flex w-full flex-col gap-3 rounded-lg p-4 ", props.className)}
        />
    );
}
