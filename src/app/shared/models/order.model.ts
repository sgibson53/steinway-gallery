import { ShippingInformation } from './shipping-information.model';
import { CartItem } from './cart-item.model';

export interface Order {
    shippingInfo: ShippingInformation;
    products: CartItem[];
    totalPrice: number;
    createdAt: any;
}
