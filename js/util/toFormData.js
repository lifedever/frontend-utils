/**
 * 将对象转化成表单参数 FormData
 * @param object
 * @returns {FormData}
 */
export const toFormData = object => {
    let formData = new FormData();
    Object.keys(object).forEach(key => {
        let value = object[key];
        if (value) {
            formData.append(key, object[key]);
        }
    });
    return formData;
};
export default toFormData
