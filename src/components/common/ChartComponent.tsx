import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { x: 0, withdrawal: 18, deposit: 80, payment: 60 },
    { x: 2, withdrawal: 55, deposit: 20, payment: 10 },
    { x: 4, withdrawal: 37, deposit: 12, payment: 80 },
    { x: 6, withdrawal: 73, deposit: 19, payment: 12 },
    { x: 8, withdrawal: 49, deposit: 13, payment: 90 },
    { x: 10, withdrawal: 14, deposit: 14, payment: 10 },
]

const chartConfig = {
    withdrawal: {
        label: "Withdrawal",
        color: "hsl(var(--chart-1))",
    },
    deposit: {
        label: "Deposit",
        color: "hsl(var(--chart-2))",
    },
    payment: {
        label: "Payment",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

export function ChartComponent() {
    return (
        <ChartContainer config={chartConfig} className=" py-4 pr-2 h-full mobile-lg:h-[250px] w-full">
            <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 8,
                    right: 8,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="x"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={2}
                    type="number"
                    domain={['dataMin', 'dataMax']}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickCount={12}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <ChartLegend className=" mobile-md:text-[8px] bg-white_1 rounded-lg pb-2" content={<ChartLegendContent />} />
                <Line
                    dataKey="withdrawal"
                    type="monotone"
                    stroke="var(--yellow-1)"
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    dataKey="deposit"
                    type="monotone"
                    stroke="var(--orange-2)"
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    dataKey="payment"
                    type="monotone"
                    stroke="var(--black-3)"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ChartContainer>
    )
}
