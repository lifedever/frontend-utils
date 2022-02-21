/**
 * 将对象中为空的属性去掉
 * @param obj
 * @returns {*}
 */
const clearObj = (obj) => {
    let target = {};
    Object.keys(obj).forEach(key => {
        if (obj[key] !== undefined && obj[key] !== '' && obj[key] !== null) target[key] = obj[key];
    });
    return target;
}

export default clearObj
