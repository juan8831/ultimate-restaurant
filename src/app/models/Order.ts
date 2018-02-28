import {LineItem} from '../models/LineItem';

export interface Order{
    id: string;
    customerEmail: string;
    status: string;
    lineItems?: LineItem[];
    timeReceived: any;
    timeEnviada: any;
    totalPrice: number;
    note: string;
    customerName?: string;
}