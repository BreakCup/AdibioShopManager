export class HttpConf{
    url = 'http://shop.adibio.cn/admin';

    getOrderDetail = '/order_detail';
    getLatestOrder = '/latest_orders';
    getPartOrder = '/part_orders';

    statusAll = 'ALL';
    statusUnpaid = 'UNPAID';
    statusPro = 'PROCESSING';
    statusFin = 'FINISHED';
    statusCanceled = 'CANCELED';

    order_limit = 20;

    getLatestCashbackData = '/latest_need_cashback';
    getPartCashbackData = '/part_need_cashback';

    confirm = '/paid_cashback';
    
    cashback_limit = 20;
}