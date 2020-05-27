/**
 * 获取请求的错误码，遵循restful
 * @returns {number|string|null}
 */
const getErrorCode = (err) => {
    if (err.response && err.response.data && err.response.data.code) {
        return err.response.data.code
    } else {
        return null
    }
}

export default getErrorCode