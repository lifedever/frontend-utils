/**
 * 去除html所有标记
 * @param str
 * @returns {*}
 */
const delHtmlTag = (str) => {
    return str.replace(/<[^>]+>/g, "");
}

export default delHtmlTag