/**
 * 校验是否为手机号
 * @returns {boolean}
 */
const checkMobile = (mobile) => {
    return /^1[3456789]\d{9}$/.test(mobile);
}

export default checkMobile
