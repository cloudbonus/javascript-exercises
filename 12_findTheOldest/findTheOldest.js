const findTheOldest = function (arr) {
    let currYear = new Date().getFullYear()
    return arr.reduce((oldest, person) => {
        let age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currYear - person.yearOfBirth
        return age > oldest.age ? { ...person, age } : oldest
    }, { age: 0 })
};

// Do not edit below this line
module.exports = findTheOldest;
