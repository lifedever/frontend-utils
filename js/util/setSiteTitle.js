/**
 * 设置网站标题
 * @param title
 * @param reset
 * @param split
 */
const setSiteTitle = (title, reset = false, split = '|') => {
    if (reset) {
        document.title = title
    } else {
        let titles = document.title.split(split)
        document.title = title + ` ${split} ` + titles[titles.length - 1]
    }
}

export default setSiteTitle