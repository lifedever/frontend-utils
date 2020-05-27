const clearObj = obj => {
    let target = {};
    Object.keys(obj).forEach(key => {
        if (obj[key])
            target[key] = obj[key]
    });
    return target;
};

export default clearObj