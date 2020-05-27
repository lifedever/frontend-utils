/**
 * 将对象转换成数组
 * @param obj
 * @returns {[]}
 */
const toArray = (obj) => {
    let arr = []
    Object.keys(obj).forEach(key => {
        arr.push({
            key: key,
            value: obj[key]
        })
    })
    return arr
}
export default toArray