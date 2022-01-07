const fixLocationProtocol = (url) => {
    let u = new URL(url)
    u.protocol = location.protocol
    return u.href
}
export default fixLocationProtocol
