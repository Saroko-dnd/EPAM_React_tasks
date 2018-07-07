const createUuidv4 = () => {
    let d = new Date().getTime();
    if (
        typeof performance !== 'undefined' &&
        typeof performance.now === 'function'
    ) {
        d += performance.now();
    }

    /* eslint-disable no-bitwise */
    /* eslint-disable no-mixed-operators */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = ((d + Math.random() * 16) % 16) | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    /* eslint-enable no-mixed-operators */
    /* eslint-enable no-bitwise */
};

export default createUuidv4;
