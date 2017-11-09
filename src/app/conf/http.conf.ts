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

    limit = 20;
}