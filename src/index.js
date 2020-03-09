module.exports = function toReadable (number) {
    const zeroNine = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twentyNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = [];

    if (number === 0){
        return "zero";
    }
    if (number >= 100){
        result.push(zeroNine[Math.floor(number / 100)]);
        result.push("hundred");
        number %= 100;
    }
    if (number >= 20){
        result.push(twentyNinety[Math.floor(number / 10) - 2]);
        number %= 10;
    }
    if (number >= 10){
        result.push(tenNineteen[(number % 10)]);
        number = 0;
    }
    if (number > 0){
        result.push(zeroNine[number]);
    }
    return result.join(' ').trim();
};
