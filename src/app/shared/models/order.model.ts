import { ShippingInformation } from './shipping-information.model';
import { ProductOrder } from './product-order.model';

export interface Order {
    shippingInfo: ShippingInformation;
    products: ProductOrder[];
    totalPrice: number;
    timestamp: Date;
}
