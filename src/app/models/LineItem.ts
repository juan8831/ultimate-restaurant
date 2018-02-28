export interface LineItem{
    inventoryId: string;  //will be inventory_item id or completo id
    quantity: number;
    pricePerUnit?: number;
    description?: string;
}