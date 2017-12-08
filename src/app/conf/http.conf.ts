export class HttpConf{
    url = 'http://shop.adibio.cn/admin';

    //订单信息管理
    getOrderDetail = '/order_detail';
    getLatestOrder = '/latest_orders';
    getPartOrder = '/part_orders';
    updataPatientInfo = "/update_order_patient";

    //检测结果管理
    getAnalysisInfo = "/analysis_info";
    creakAnalysisInfo = "/create_analysis";
    updataAnalysis = "/update_analysis";
    deleteAnalysis = "/delete_analysis";
    notifyAnalysis = '/notify_analysis';

    //获取返现信息
    getLatestCashbackData = '/latest_cashback';
    getPartCashbackData = '/part_cashback';

    //物流管理
    getExpressageInfo = "/expressage_info";
    updateExpressageInfo = "/update_expressage";

    //产品管理.
    //产品分组
    getProductGroups = "/product_groups";
    updateProductGroup = "/update_product_group";
    addProductGroup = "/add_product_group";
    deleteProductGroup = "/delete_product_group";

    //产品信息&优惠
    getProductList = "/product_list";
    getProductDiscontList = "/product_discount_list";
    updateProduct = "/update_product";
    updateProductDiscont = "/update_product_discount";

    statusAll = 'ALL';
    statusUnpaid = 'UNPAID';
    statusPro = 'PROCESSING';
    statusFin = 'FINISHED';
    statusCanceled = 'CANCELED';

    order_limit = 20;

    confirm = '/paid_cashback';
    
    cashback_limit = 20;



}