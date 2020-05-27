/**
 * 拼接路径
 * @returns {string}
 */
const appendPath = (prefix, path) => {
    if (prefix.endsWith("/")) {
        prefix = prefix.slice(0, -1)
    }
    if (path.startsWith('/')) {
        path = path.slice(1)
    }
    return prefix + '/' + path
}

export default appendPath