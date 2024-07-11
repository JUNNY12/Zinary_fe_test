export function formatCurrencyInNaira(amount: number | string): string {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

    if (isNaN(numericAmount)) {
        throw new Error("Invalid amount");
    }

    return '₦' + numericAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
