const sumAll = function (min, max) {
    try {
        if (min < 0
            || max < 0
            || !Number.isInteger(min)
            || !Number.isInteger(max)) throw new Error
        if (min > max) {
            temp = min
            min = max
            max = temp
        }
        return Array.from({ length: max - min + 1 }, (_, i) => min + i)
            .reduce((acc, curr) => acc + curr)
    }
    catch (e) {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
