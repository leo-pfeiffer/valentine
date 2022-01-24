const seedrandom = require("seedrandom");

const getDailySeed = function() {
    const date = new Date()
    const seed = '' + date.getDate() + '' + date.getMonth() + '' + date.getFullYear()
    const rng = seedrandom(seed)
    return rng()
}

const getRandomIndex = function(length, rnd) {
    return parseInt(length * rnd);
}

const setContrast = function(rgb) {

    const brightness = Math.round(((parseInt(rgb[0]) * 299) +
        (parseInt(rgb[1]) * 587) +
        (parseInt(rgb[2]) * 114)) / 1000);
    return (brightness > 125) ? 'black' : 'white';
}

module.exports = {
    getDailySeed: getDailySeed,
    getRandomIndex: getRandomIndex,
    setContrast: setContrast
}