const clearObj = obj => {
    let target = {};
    Object.keys(obj).forEach(key => {
        if (obj[key] !== undefined && obj[key] !== '' && obj[key] !== null)
            target[key] = obj[key]
    });
    return target;
};

export default clearObj