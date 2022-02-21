/**
 * 产生随机字符串
 * @param length
 * @returns String
 */
const randomStr = (length) => {
    length = length || 16;
    let t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
        a = t.length,
        n = '';
    for (let i = 0; i < length; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n;
}

export default randomStr
