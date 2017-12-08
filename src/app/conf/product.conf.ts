export class ProductList{
    result: string;
    errMsg: string;
    parm:ProductInfo[];
}
export class ProductInfo{
    product_id: string;
    product_groupid: string;
    product_name: string;
    unit_price: number;
    description: string;
}
export class ProductDiscountList{
    result: string;
    errMsg: string;
    parm:ProductDiscount[];
}
export class ProductDiscount{
    product_discount_id: string;
    product_id: string;
    discount_type: string;
    discount: string;
    cashback: string;
    description: string;
}
