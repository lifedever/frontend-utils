/**
 * 将对象转换成表单FormData
 * @param object
 * @returns {FormData}
 */
const toFormData = (object) => {
    let formData = new FormData()
    Object.keys(object).forEach(key => {
        formData.append(key, object[key])
    })
    return formData
}

export default toFormData