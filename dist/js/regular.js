// 手机号
jQuery.validator.addMethod("regPhone", function(value, element) {
    var length = value.length;
    var regPhone =  /^1\d{10}$/;
    return this.optional(element) || (length === 11 && regPhone.test(value));
}, "手机号码格式错误");

// 身份证
jQuery.validator.addMethod("regIDCard", function(value, element) {
    var length = value.length;
    var regIDCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return this.optional(element) || regIDCard.test(value);
}, "身份证号格式错误");

// 车牌号
jQuery.validator.addMethod("regCarNumber", function(value, element) {
    var length = value.length;
    var regCarNumber = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    return this.optional(element) || (length === 7 && regCarNumber.test(value));
}, "车牌号格式错误");

//车辆识别码
jQuery.validator.addMethod("regCaIDCard", function(value, element) {
    var length = value.length;
    var regCaIDCard = /^[a-zA-Z0-9]{17}$/;
    return this.optional(element) || (length === 17 && regCaIDCard.test(value));
}, "车辆识别码格式错误");

//银行卡号
jQuery.validator.addMethod("regBankNumber", function(value, element) {
    var length = value.length;
    var regBankNumber = /^([1-9]{1})(\d{15}|\d{18})$/;
    return this.optional(element) || regBankNumber.test(value);
}, "银行卡号格式错误");

//油卡号
jQuery.validator.addMethod("regOilCardNumber", function(value, element) {
    var length = value.length;
    var regOilCardNumber =  /^\d{7}$/;
    return this.optional(element) || (length === 7 && regOilCardNumber.test(value));
}, "油卡号格式错误");