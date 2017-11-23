export class OrderDetailConf{
    result: string;
    errMsg: string;
    parm: {
        wechat: OrderDetailWechatConf;
        events:Array<OrderDetailEventConf>;
        infos:Array<OrderDetailInfosConf>;
        order:OrderDetailOrderConf;
    }
}
export class OrderDetailWechatConf{
    customer_id: string;
    openid: string;
    nickname: string;
    sex: string;
    province: string;
    city: string;
    headimgurl: string;
}
export class OrderDetailEventConf{
    order_eventid: string;
    order_id: string;
    event_time: number;
    event_title: string;
    event_executor: string;
    description: string;
}
export class OrderDetailInfosConf{
    order_id: string;
    order_itemid: string;
    order_infoid: string;
    product_id: string;
    product_name: string;
    unit_price: number;
    order_patient_infoid: string;
    name: string;
    gender: string;
    age: number;
    country: string;
    province: string;
    city: string;
    district: string;
    address: string;
    phone: string;
    has_diabetic: number;
    is_pregnant:number;
    height: number;
    weight: number;
}
export class OrderDetailOrderConf{
    row_id: number;
    order_id: string;
    customer_id: string;
    price: number;
    status: string;
    description: string;
}

export class ExpressageInfo{
    result: string;
    errMsg: string;
    parm: {
        expressage_id: string;
        order_infoid: string;
        company: string;
        expressage_number: string;
    }
}