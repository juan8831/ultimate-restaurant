export interface InventoryItem{
    id: string;
    description: string;
    price: number;
    type: string;
    isAvailable?: boolean;
}