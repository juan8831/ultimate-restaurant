export interface Payment{
    id: string;
    customerEmail: string;
    customerName: string;
    date: Date;
    amount: number;
    note: string;
}