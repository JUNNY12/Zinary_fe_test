import { DataItem } from "@/components/common/TableComponent";

export const transactionData: DataItem[] = [
  {
    sn: 1,
    name: "John Doe",
    transactionReference: "TRX001",
    type: "Deposit",
    amount: "25000",
    date: "2024-01-15",
    status: "Successful",
    action: "View"
  },
  {
    sn: 2,
    name: "Jane Smith",
    transactionReference: "TRX002",
    type: "Withdrawal",
    amount: "150000",
    date: "2024-01-18",
    status: "Pending",
    action: "View"
  },
  {
    sn: 3,
    name: "Mike Johnson",
    transactionReference: "TRX003",
    type: "Payment",
    amount: "35000",
    date: "2024-01-20",
    status: "Failed",
    action: "View"
  },
  {
    sn: 4,
    name: "Emily Davis",
    transactionReference: "TRX004",
    type: "Deposit",
    amount: "45000",
    date: "2024-01-22",
    status: "Successful",
    action: "View"
  },
  {
    sn: 5,
    name: "Robert Wilson",
    transactionReference: "TRX005",
    type: "Payment",
    amount: "55000",
    date: "2024-01-25",
    status: "Successful",
    action: "View"
  },
  {
    sn: 6,
    name: "Linda Martinez",
    transactionReference: "TRX006",
    type: "Withdrawal",
    amount: "20000",
    date: "2024-01-28",
    status: "Pending",
    action: "View"
  },
  {
    sn: 7,
    name: "James Brown",
    transactionReference: "TRX007",
    type: "Deposit",
    amount: "30000",
    date: "2024-01-30",
    status: "Failed",
    action: "View"
  },
];

export const tableHeaders = ["S/N", "Name", "Transaction Reference", "Type", "Amount", "Date", "Status"];

export const socialLinks = {
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  instagram: 'https://www.instagram.com',
  email: 'example@example.com',
  sms: '+1234567890',
  phone: '+1234567890'
}

