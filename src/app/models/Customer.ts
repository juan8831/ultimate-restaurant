import {Order} from '../models/Order';
import {Payment} from '../models/Payment';

export interface Customer{
    id: string; //email is id
    name: string;
    address: string;
    orders?: Order[];
    payments?: Payment[];
    role: string;
}