import {LineItem} from '../models/LineItem';

export interface Order{
    id: string;
    customerEmail: string;
    status: string;
    lineItems?: LineItem[];
    timeReceived: Date;
    timeEnviada: Date;
    totalPrice: number;
    note: string;
    customerName?: string;
    deliveryBoy?: string;
    rejectionReason?: string;
}