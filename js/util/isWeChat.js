/**
 * 检查当前网站是否在微信内
 * @returns {boolean}
 */
const isWeChat = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('micromessenger') !== -1;
}

export default isWeChat