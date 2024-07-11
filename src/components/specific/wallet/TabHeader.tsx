
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { transactionData } from "@/constants/constants"
import { DataTable } from "@/components/common/DataTable"
import { columnsData } from "@/components/common/ColumnsData"
import { Button } from "@/components/ui/button"

export default function TabHeader() {
    return (
        <div className=" bg-[#f8f8f8]">
            <Tabs defaultValue="all" className="">
                <div className=" bg-white rounded-tl-lg rounded-tr-lg overflow-auto w-full">
                    <TabsList className="bg-white rounded-tl-lg ">
                        <TabsTrigger className="text-[14px] font-bold text-black_1" value="all">All</TabsTrigger>
                        <TabsTrigger className=" text-[14px] font-bold text-black_1" value="withdrawals">Withdrawals</TabsTrigger>
                        <TabsTrigger className="text-[14px] font-bold text-black_1 " value="deposits">Deposits</TabsTrigger>
                        <TabsTrigger className=" text-[14px] font-bold text-black_1" value="payments">Payments</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="all">
                    <DataTable columns={columnsData} data={transactionData} />

                </TabsContent>
                <TabsContent value="withdrawals">
                    <DataTable columns={columnsData} data={transactionData} />
                </TabsContent>
                <TabsContent value="deposits">
                    <DataTable columns={columnsData} data={transactionData} />
                </TabsContent>
                <TabsContent value="payments">
                    <DataTable columns={columnsData} data={transactionData} />
                </TabsContent>
            </Tabs>
            <div className=" flex justify-center items-center w-full mt-8">
                <Button className="font-[600] text-[14px]" variant={"orange_4"}>View All</Button>
            </div>
        </div>
    )
}