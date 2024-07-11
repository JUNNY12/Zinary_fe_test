import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export type DataItem = {
    sn?: string | number;
    name: string;
    transactionReference: string;
    type: string;
    amount: string;
    date: string;
    status?: string;
    action?: string;
}

export type TableProps = {
    caption?: string;
    headers: string[];
    data: DataItem[];
    footer?: { [key: string]: string };
    filterType?: string;
};

const headerKeyMapping: { [key: string]: keyof DataItem } = {
    "S/N": "sn",
    "Name": "name",
    "Transaction Reference": "transactionReference",
    "Type": "type",
    "Amount": "amount",
    "Date": "date",
    "Status": "status"
};

export default function TableComponent({ caption, headers, data, filterType }: TableProps) {
    const filteredData = filterType ? data.filter(row => row.type === filterType) : data;

    const dataWithIndex = filteredData.map((row, index) => ({
        ...row,
        sn: (index + 1).toString(),
    }));

    return (
        <Table className="">
            <TableCaption>{caption}</TableCaption>
            <TableHeader className="bg-black_4">
                <TableRow className=" rounded-lg">
                    {headers.map((header, index) => (
                        <TableHead key={index} className={header === "Amount" ? "text-right text-white" : header === "Status" ? "text-center text-white" : "text-white"}>
                            {header}
                        </TableHead>
                    ))}
                    <TableHead className="text-black_4">
                        Action
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
                {dataWithIndex.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {headers.map((header, cellIndex) => (
                            <TableCell key={cellIndex} className={header === "Amount" ? "text-right" : header === "Status" ? "text-center" : ""}>
                                {
                                    header === "Status" ? (
                                        <span className={`px-2 py-1 rounded-xl text-gray-100 ${row[headerKeyMapping[header]] === "Successful" ? "bg-green-500" : row[headerKeyMapping[header]] === "Failed" ? "bg-red-500" : row[headerKeyMapping[header]] === "Pending" ? "bg-yellow-500" : ""}`}>
                                            <span className=" inline-block h-2 w-2 rounded-full mr-1 bg-gray-100"></span>
                                            {row[headerKeyMapping[header]]}
                                        </span>

                                    ) : row[headerKeyMapping[header] as keyof DataItem]
                                }
                            </TableCell>

                        ))}
                        <TableCell>
                            View
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table >
    );
}
