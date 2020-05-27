/**
 * 检查请求的返回错误码，遵循restful
 * @returns {*|boolean}
 */
const checkErrorCode = (error, code) => {
    return error && error.response && error.response.data.code === code
}

export default checkErrorCode