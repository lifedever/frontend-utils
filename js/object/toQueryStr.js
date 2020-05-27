/**
 * 将对象转换成请求的query字符串
 * @param object
 * @returns {string}
 */
const toQueryString = object => {
    return Object.keys(object)
        .map(key => `${key}=${object[key].toString()}`)
        .join('&');
}

export default toQueryString