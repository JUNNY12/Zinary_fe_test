import { DataItem } from "@/components/common/TableComponent";
import { CustomerDataItem } from "./CustomerColumnsData";
import { StaffDataItem } from "./StaffColumnsData";
import { LoanDataItem } from "./LoanColumnsData";


export const customerData: CustomerDataItem[] = [
    {
        customerId: "CUS00001",
        name: "John Doe",
        email: "john.doe@example.com",
        phoneNumber: 8012345678,
        dateRegistered: "2023-07-15",
        status: "Active"
    },
    {
        customerId: "CUS00002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phoneNumber: 9087654321,
        dateRegistered: "2023-09-22",
        status: "Inactive"
    },
    {
        customerId: "CUS00003",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phoneNumber: 7023456789,
        dateRegistered: "2024-01-05",
        status: "Active"
    },
    {
        customerId: "CUS00004",
        name: "Bob Williams",
        email: "bob.williams@example.com",
        phoneNumber: 6034567890,
        dateRegistered: "2023-11-30",
        status: "Inactive"
    },
    {
        customerId: "CUS00005",
        name: "Emma Brown",
        email: "emma.brown@example.com",
        phoneNumber: 5045678901,
        dateRegistered: "2024-03-18",
        status: "Active"
    }
];

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

export const staffData: StaffDataItem[] = [
    {
        staffId: "STF001",
        name: "Alice Johnson",
        email: "alice.johnson@company.com",
        phoneNumber: 8012345678,
        department: "Human Resources",
        status: "Active"
    },
    {
        staffId: "STF002",
        name: "Bob Smith",
        email: "bob.smith@company.com",
        phoneNumber: 9087654321,
        department: "IT",
        status: "Active"
    },
    {
        staffId: "STF003",
        name: "Carol Williams",
        email: "carol.williams@company.com",
        phoneNumber: 7023456789,
        department: "Finance",
        status: "Inactive"
    },
    {
        staffId: "STF004",
        name: "David Brown",
        email: "david.brown@company.com",
        phoneNumber: 6034567890,
        department: "Marketing",
        status: "Active"
    },
    {
        staffId: "STF005",
        name: "Eva Davis",
        email: "eva.davis@company.com",
        phoneNumber: 5045678901,
        department: "Sales",
        status: "Inactive"
    }
];

export const loanData: LoanDataItem[] = [
    {
        transactionId: "TRN1001",
        customer: "John Doe",
        loanId: "LN2024001",
        amount: 250000,
        disbursment: "Bank Transfer",
        dateRegistered: "2024-03-15"
    },
    {
        transactionId: "TRN1002",
        customer: "Jane Smith",
        loanId: "LN2024002",
        amount: 500000,
        disbursment: "Mobile Money",
        dateRegistered: "2024-03-18"
    },
    {
        transactionId: "TRN1003",
        customer: "Alice Johnson",
        loanId: "LN2024003",
        amount: 750000,
        disbursment: "Bank Transfer",
        dateRegistered: "2024-03-20"
    },
    {
        transactionId: "TRN1004",
        customer: "Bob Williams",
        loanId: "LN2024004",
        amount: 100000,
        disbursment: "Cash",
        dateRegistered: "2024-03-22"
    },
    {
        transactionId: "TRN1005",
        customer: "Emma Brown",
        loanId: "LN2024005",
        amount: 300000,
        disbursment: "Bank Transfer",
        dateRegistered: "2024-03-25"
    },
    {
        transactionId: "TRN1006",
        customer: "Michael Davis",
        loanId: "LN2024006",
        amount: 450000,
        disbursment: "Mobile Money",
        dateRegistered: "2024-03-28"
    },
    {
        transactionId: "TRN1007",
        customer: "Sarah Wilson",
        loanId: "LN2024007",
        amount: 200000,
        disbursment: "Bank Transfer",
        dateRegistered: "2024-04-01"
    }
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

