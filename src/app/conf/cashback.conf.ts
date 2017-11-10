export class CashbackConf {
    result: string;
    errMsg: string;
    parm: Array<CashbackParmConf>;
}

export class CashbackParmConf {
    cashbacks: [
        {
            order_id: string;
            order_infoid: string;
            product_name: string;
            unit_price: number;
            discount: number;
            cashback: number;
        }
    ];
    share: {
        row_id: number;
        share_id: string;
        from_id: string;
        order_id: string;
        _paid: boolean;
    };
    whole_cashback: number;
    customer: {
        customer_id: string;
        telphone: string;
        email: string;
        openid: string;
        register_time: number;
        zhifubao_account: string;
        bank_card_number: string;
    };
}

export class ConfirmConf {
    result: string;
    errMsg: string;
    parm: string;
}