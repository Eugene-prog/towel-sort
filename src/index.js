module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length === 0) return [];

    let result = matrix.reduce((acc, cur, i) => {
        if (i % 2) {
            return acc.concat(cur.reverse().sort((a, b) => b - a));
        } else {
            return acc.concat(cur.sort((a, b) => a - b));
        }
    }, []);

    return result;
};
