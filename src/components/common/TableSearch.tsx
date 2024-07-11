import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function TableSearch() {
    return (
        <div className="flex justify-between mt-[2px] bg-white p-4 rounded-br-lg rounded-bl-lg">
            <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <Input
                    type="search"
                    placeholder="Search"
                    className="block w-full pl-10 pr-3 h-[35px] rounded-[8px] sm:text-sm"
                />
            </div>
            <div className=" flex items-center gap-x-2">
                <div className=" text-black_2 text-[12px] font-[500]">Display</div>
                <div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="status">Status</SelectItem>
                            <SelectItem value="Amount">Amount</SelectItem>
                            <SelectItem value="Type">Type</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className=" text-black_2 text-[12px] font-[500]">Rows</div>
            </div>
        </div>
    )
}