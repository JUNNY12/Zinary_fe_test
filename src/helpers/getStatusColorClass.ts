export function getStatusColorClass(status?: string): string {
    switch (status) {
        case "Successful":
            return "bg-green-500";
        case "Failed":
            return "bg-red-500";
        case "Pending":
            return "bg-yellow-500";
        default:
            return "";
    }
}
