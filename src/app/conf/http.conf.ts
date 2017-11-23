export class HttpConf{
    url = 'http://shop.adibio.cn/admin';

    getOrderDetail = '/order_detail';
    getLatestOrder = '/latest_orders';
    getPartOrder = '/part_orders';
    getAnalysisInfo = "/analysis_info";
    creakAnalysisInfo = "/create_analysis";
    updataAnalysis = "/update_analysis";
    deleteAnalysis = "/delete_analysis";
    updataPatientInfo = "/update_order_patient";
    getLatestCashbackData = '/latest_cashback';
    getPartCashbackData = '/part_cashback';
    getExpressageInfo = "/expressage_info";
    updateExpressageInfo = "/update_expressage";

    statusAll = 'ALL';
    statusUnpaid = 'UNPAID';
    statusPro = 'PROCESSING';
    statusFin = 'FINISHED';
    statusCanceled = 'CANCELED';

    order_limit = 20;

    

    confirm = '/paid_cashback';
    
    cashback_limit = 20;



}