/**
 * 线程休眠
 */
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export default sleep