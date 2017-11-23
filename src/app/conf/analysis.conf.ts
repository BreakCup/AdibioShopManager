import { OrderDetailInfosConf } from "./order_detail.conf"
export class AnalysisInfo {
    analysis_id: string;
    order_infoid: string;
    result: null;
    collection_date: null;
    analysis_date: null;
}
export class AnalysisResponse{
    result: string;
    errMsg: string;
    parm: {
        patient_info: OrderDetailInfosConf;
        analysis: AnalysisInfo;
        product_name: string;
    }
}