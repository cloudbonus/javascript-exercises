const palindromes = function (string) {
    res = [...string.toLowerCase()].filter(c => c.match('[a-z0-9]'))
    return res.join('') == res.reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
