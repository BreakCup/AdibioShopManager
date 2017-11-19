export class OrderConf {
    result: string;
    errMsg: string;
    parm: OrderInfoConf[];
}
export class OrderInfoConf{
    row_id: number;
    order_id: string;
    customer_id: string;
    price: number;
    status:  string;
    description:  string;
}
