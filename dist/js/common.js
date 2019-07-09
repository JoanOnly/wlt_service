// toIndex跳转到首页
function toIndex() {
    window.location.href = 'index.html?openid=' + store.get('openid');
}
// toServiceList跳转到服务列表
function toServiceList() {
    window.location.href = 'service_list.html';
}
// toTyre跳转到轮胎服务
function toTyre() {
    window.location.href = 'tyre_preserve.html';
}
// toReview跳转到车辆检审
function toReview() {
    window.location.href = 'review_preserve.html';
}
// toPayment跳转运费垫付
function toPayment() {
    window.location.href = 'payment_preserve.html';
}
// toDriver跳转司机消费贷
function toDriver() {
    window.location.href = 'driver_preserve.html';
}
// toCard跳转油卡服务
function toCard() {
    window.location.href = 'card_preserve.html';
}
// toCar跳转购车贷
function toCar() {
    window.location.href = 'car_preserve.html';
}
// toCompany跳转企业授信
function toCompany() {
    window.location.href = 'company_preserve.html';
}
// toBuild跳转正在建设
function toBuild() {
    window.location.href = 'build_page.html';
}
// toComplete跳转完成
function toComplete() {
    window.location.href = 'complete_page.html';
}
// toAccount跳转系统账户
function toAccount() {
    window.location.href='account_system.html';
}

//toDriverList跳转到司机找货列表
function toDriverList() {
    window.location.href='driver_order_list.html';
}
//toDriverList跳转到自己抢单详情
function toDriverWaybillParticulars() {
    window.location.href='driver_waybill_particulars.html';
}
//toDriverList跳转到抢单成功
function toDriverRobListSuccess() {
    window.location.href='driver_rob_list_success.html';
}
// toDispatchParticulars跳转调度订单详情
function toDispatchParticulars() {
    window.location.href='dispatch_waybill_particulars.html';
}
// toDispatchParticulars跳转我的调度订单详情
function toDispatchParticularsMy() {
    window.location.href='driver_waybill_particulars_my.html';
}
//toDriverList跳转到调度发布列表
function toDispatchList() {
    window.location.href='dispatch_order_list.html';
}
//toDriverList跳转到调度发布
function toDispatchAdd() {
    window.location.href='dispatch_add.html';
}
//toDriverList跳转到个人中心
function toPersonalCenterLook() {
    window.location.href='personal_center_look.html';
}
//toDispatchPersonal跳转到调度个人中心
function toDispatchPersonal() {
    window.location.href='dispatch_personal.html';
}
//toDriverList跳转到我的
function toDriverMy() {
    window.location.href='driver_my.html';
}
//toDriverList跳转到我的订单
function toDriverMyList() {
    window.location.href='driver_my_list.html';
}
//toDriverList跳转到我的账户
function toMyAccount() {
    window.location.href='my_account_obligation.html';
}
//toDriverList跳转到我的账户
function toAccountDetails() {
    window.location.href='account_details.html';
}
//toInsuranceList跳转到保险列表
function toInsuranceList() {
    window.location.href='insurance_list.html';
}
//toInsurance跳转到保险界面
function toInsurance() {
    window.location.href='insurance.html';
}
//toInsuranceAddCar跳转到新增车辆
function toInsuranceAddCar(id) {
    store.set(allParam.INSURANCE_CAR_ID, id);
    window.location.href='insurance_add_car.html';
}
//toInsuranceEnquiry跳转到险种提交
function toInsuranceEnquiry(id,status) {
    //判断状态
    if (status == 2) {
        store.set(allParam.INSURANCE_IS_PAY_ID, id);
        window.location.href='insurance_confirm.html';
    }else {
        store.set(allParam.INSURANCE_NO_PAY_ID, id);
        window.location.href='insurance_enquiry.html';
    }
}
//toInsuranceConfirm跳转到保单确认
function toInsuranceConfirm() {
    window.location.href='insurance_confirm.html';
}
//toInsurancePay跳转到保单支付
function toInsurancePay(id) {
    store.set(allParam.INSURANCE_IS_PAY_ID, id);
    window.location.href='insurance_pay.html';
}
//toInsuranceMy跳转到保险我的
function toInsuranceMy() {
    window.location.href='insurance_my.html';
}
//toInsuranceMyList跳转到保险车险订单
function toInsuranceMyList() {
    window.location.href='insurance_my_list.html';
}
// toInsurancePriceList跳转到保险车险报价
function toInsurancePriceList() {
    window.location.href='insurance_price_list.html';
}
// toInsuranceClaimSettlement跳转到保险理赔
function toInsuranceClaimSettlement() {
    window.location.href='insurance_claim_settlement.html';
}
// toInsuranceClaimSettlementParticulars跳转到保险理赔详情
function toInsuranceClaimSettlementParticulars() {
    window.location.href='insurance_claim_settlement_particulars.html';
}
//toInsuranceMyAddress跳转到收件地址
function toInsuranceMyAddress() {
    window.location.href='insurance_my_address.html';
}
//toInsuranceMyAddressEdit跳转到添加或编辑收件地址
function toInsuranceMyAddressEdit(id) {
    //详情id
    store.set(allParam.USER_DETAIL_ID, id);
    window.location.href='insurance_my_address_edit.html';
}
//toInsuranceMyCar跳转到我的车辆
function toInsuranceMyCar() {
    window.location.href = 'insurance_my_car.html';
}
//车贷
//toCarLoan跳转到车贷主页
function toCarLoan() {
    window.location.href = 'car_loan.html';
}
//toCarLoanConfirm跳转到借款确认
function toCarLoanConfirm() {
    window.location.href = 'car_loan_confirm.html';
}
//toCarLoanHistory跳转到历史订单
function toCarLoanHistory() {
    window.location.href = 'car_loan_history.html';
}
//toCarLoanLimit跳转到预估额度
function toCarLoanLimit() {
    window.location.href = 'car_loan_limit.html';
}
//toCarLoanMy跳转到个人中心
function toCarLoanMy() {
    window.location.href = 'car_loan_my.html';
}
//toCarLoanRecord跳转到还款记录
function toCarLoanRecord() {
    window.location.href = 'car_loan_record.html';
}

//跳转到查看详情
function toCarLoanDetail() {
    window.location.href = 'car_loan_detail.html';
}
//toCarLoanSchedule跳转到进度查询
function toCarLoanSchedule() {
    window.location.href = 'car_loan_schedule.html';
}
//toCarLoanRepayment跳转到快速还款
function toCarLoanRepayment() {
    window.location.href = 'car_loan_repayment.html';
}
//toPersonalCertification跳转到实名认证
function toPersonalCertification() {
    window.location.href = 'personal_certification.html';
}
//toPersonalCertification跳转到实名认证
function toDataMatching() {
    window.location.href = 'data_matching.html';
}
//toMessageCenter跳转消息中心
function toMessageCenter() {
    window.location.href = 'message_center.html';
}
//industryTrendsParticulars行业动态的详情
function industryTrendsParticulars() {
    window.location.href = 'industry_trends_particulars.html';
}