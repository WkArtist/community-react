/* 验证不能为空 */
const validatorIsEmpty = (value) => {
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  } else {
    return {
      success: true
    }
  }
}

// 性别验证
const validatorSex = (value, callback) => {
  if (value === 0 || value === 1 || value === '男' || value === '女') {
    return {
      success: true
    }
  } else {
    return {
      success: false,
      msg: '性别不能为空'
    }
  }
}

/* 验证只能是整数 */
const validatorNumber = (value, callback) => {
  const reg = /^[1-9]\d*$/
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  } else if (!reg.test(value)) {
    return {
      success: false,
      msg: '只能输入整数'
    }
  } else {
    return {
      success: true
    }
  }
}

/* 年龄 验证只能是0-99整数 */
const validatorAge = (value, callback) => {
  const reg = /^[1-9]\d*$/
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  } else if (!reg.test(value)) {
    return {
      success: false,
      msg: '只能输入整数'
    }
  } else if (value > 99 || value < 0) {
    return {
      success: false,
      msg: '请输入0-99'
    }
  } else {
    return {
      success: true
    }
  }
}

/* 限制输入内容的字符限制value.length<4||value.length>60 */
const validatorLimitContent = (value) => {
  const reg = /^[\u4E00-\u9FFF]+$/
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  }
  const isHanzi = reg.test(value)
  const isHanziLimit = value.length < 2 || value.length > 30
  const isNumLimit = value.length < 2 || value.length > 60
  if (isHanzi && isHanziLimit) {
    return {
      success: false,
      msg: '请输入2-30个汉字'
    }
  } else if (!isHanzi && isNumLimit) {
    return {
      success: false,
      msg: '请输入2-60个字符'
    }
  } else {
    return {
      success: true
    }
  }
}

/* 联系方式验证 */
const validatorPhone = (value) => {
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '请输入联系方式'
    }
  }
  const isTel = /^((0\d{2,3}-)?([2-9][0-9]{6,7})(-[0-9]{1,4})?)$/.test(value)
  const isMobil = /^(1[3456789]\d{9})$/.test(value)
  const isHot = /^((400)-(\d{3})-(\d{4}))$|^((400)(\d{3})(\d{4}))$/.test(value)
  if (isTel || isMobil || isHot) {
    return {
      success: true
    }
  } else {
    return {
      success: false,
      msg: '请输入正确的手机号或座机号'
    }
  }
}

/* 邮箱验证 */
const validatorEmail = value => {
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '请输入邮箱'
    }
  }
  const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  if (!reg.test(value)) {
    return {
      success: false,
      msg: '请输入正确的邮箱'
    }
  } else {
    return {
      success: true
    }
  }
}

/* 身份证号验证 */
const validatorIdCard = value => {
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '请输入身份证号'
    }
  }
  /* 基础校验规则 */
  const reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(([0-2][1-9])|10|20|30|31)\d{3}(\d|X|x)$/

  /* 各省前两位代码 */
  const provs = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江 ', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北 ', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏 ', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门' }

  /* 前十七位数字每位权重 */
  const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]

  /* 校验码码表 */
  const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]

  if (!reg.test(value)) {
    return {
      success: false,
      msg: '请输入正确的身份证号'
    }
  } else {
    /* 按 省份码 日期 校验码 切割 */
    const prov = value.toString().substr(0, 2)
    const date = value.toString().substr(6, 8)
    const code = value.toString().substr(17, 1)

    /* 校验 省份 */
    const checkProv = (prov) => {
      if (provs[prov]) {
        return true
      }
      return false
    }

    /* 校验 日期 */
    const checkDate = (date) => {
      const year = date.substr(0, 4)
      const month = date.substr(4, 2)
      const date1 = date.substr(6, 2)
      const date2 = new Date(year + '-' + month + '-' + date1)
      if (date2 && date2.getMonth() === (parseInt(month) - 1)) {
        return true
      }
      return false
    }

    /* 校验 校验码 */
    const checkCode = (code) => {
      const s = value.toString().substr(0, 17)
      let sum = 0
      for (let i = 0; i < 17; i++) {
        sum += s[i] * factor[i]
      }
      if (parity[sum % 11] === code.toUpperCase()) {
        return true
      }
      return false
    }

    if (checkProv(prov) && checkDate(date) && checkCode(code)) {
      return {
        success: true
      }
    } else {
      return {
        success: false,
        msg: '请输入正确的身份证号'
      }
    }
  }
}

/* 输入内容必须在 0 至 100 %之间,且只能保留两位小数 */
const validateProgress = value => {
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  }
  value = Number(value)
  if (typeof value === 'number' && !isNaN(value)) {
    const reg = /^\d{1,2}(\.[0-9][0-9])?$|^100(\.00)?$/
    if (!reg.test(value)) {
      return {
        success: false,
        msg: '输入内容必须在 0 至 100 %之间,且只能保留两位小数'
      }
    } else {
      return {
        success: true
      }
    }
  } else {
    return {
      success: false,
      msg: '输入内容必须为数字'
    }
  }
}

/* 地址验证 限制(12-200个「字符」)*/
const validatorAddress = value => {
  const reg = /^.{12,200}$/
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  } else if (!reg.test(value)) {
    return {
      success: false,
      msg: '请输入12-200个字符'
    }
  } else {
    return {
      success: true
    }
  }
}

/* 金融 (数字) 限制小数点后两位 */
const validatorMoney = value => {
  const reg = /^\d*([.]\d{0,2})?$/
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  } else if (!reg.test(value)) {
    return {
      success: false,
      msg: '请输入正确的格式(eg:0.23)'
    }
  } else {
    return {
      success: true
    }
  }
}

/* 密码 (六位-十八位 不包含空格)*/
const validatorPassword = value => {
  const reg1 = /[' ']/
  const reg2 = /^\w{6,18}$/
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  } else if (reg1.test(value)) {
    return {
      success: false,
      msg: '不可包含空格!'
    }
  } else if (reg2.test(value)) {
    return {
      success: false,
      msg: '限制输入6-18位'
    }
  } else {
    return {
      success: true
    }
  }
}

/* 银行卡号 (12-19位数字) */
const validatorBankCardId = value => {
  const reg = /^([1-9]{1})(\d{11}|\d{15}|\d{16}|\d{17}|\d{18})$/
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  } else if (reg.test(value)) {
    return {
      success: false,
      msg: '请输入正确的银行卡号'
    }
  } else {
    return {
      success: true
    }
  }
}

/* 邮编 (6位数字（验证前两位）) */
const validatorPostcode = value => {
  const reg = /^(0[1234567]|1[012356]|2[01234567]|3[0123456]|4[01234567]|5[1234567]|6[1234567]|7[12345]|8[13456])\d{4}$/
  if ((!value) || value === '' || (value.length === 0)) {
    return {
      success: false,
      msg: '输入内容不能为空'
    }
  } else if (reg.test(value)) {
    return {
      success: false,
      msg: '请输入正确的邮政编码'
    }
  } else {
    return {
      success: true
    }
  }
}

const rules = {
  validatorIsEmpty,
  validatorSex,
  validatorNumber,
  validatorAge,
  validatorLimitContent,
  validatorPhone,
  validatorEmail,
  validatorIdCard,
  validateProgress,
  validatorAddress,
  validatorMoney,
  validatorPassword,
  validatorBankCardId,
  validatorPostcode
}

export default { rules }
