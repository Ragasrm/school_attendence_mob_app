const currentDate = new Date();
const currentYear: number = currentDate.getFullYear();
const currentMonth: number = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based months.

interface MonthData {
    month: string;
    year: number;
}

interface YearData {
    year: number;
    months: MonthData[];
}

function generateMonthsData(year: number, maxMonth: number): MonthData[] {
    const monthNames: string[] = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    return monthNames
        .slice(0, maxMonth)
        .map((month, index) => ({ month, year }));
}

export const yearsData: YearData[] = Array.from({ length: currentYear - 2000 + 1 }, (_, index) => ({
    year: 2000 + index,
    months: generateMonthsData(2000 + index, index === currentYear - 2000 ? currentMonth : 12)
}));
