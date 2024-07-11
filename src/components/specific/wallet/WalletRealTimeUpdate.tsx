import { ChartComponent } from "@/components/common/ChartComponent"

export default function WalletRealTimeUpdate() {
    return (
        <div className="flex flex-col rounded-lg relative bg-white flex-grow">
            <h3 className="ml-8 pt-2 text-black_1 text-[12px] font-semibold">Real-Time Update</h3>
            <ChartComponent />
        </div>
    )
}