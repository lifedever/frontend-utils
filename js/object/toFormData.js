/**
 * 将对象转换成表单FormData
 * @param object
 * @returns {FormData}
 */
import isUndefined from "./isUndefined";
import isNull from "./isNull";

const toFormData = (object) => {
    let formData = new FormData()
    Object.keys(object).forEach(key => {
        let value = object[key]
        if (!isUndefined(value) && !isNull(value)) {
            formData.append(key, object[key])
        }
    })
    return formData
}

export default toFormData