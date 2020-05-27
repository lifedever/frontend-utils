/**
 * 校验是否为邮箱
 * @returns {boolean}
 */
const checkEmail = email => {
    return  /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)
}

export default checkEmail