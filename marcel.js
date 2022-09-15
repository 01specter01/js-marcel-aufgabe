console.log("Zeitmaße Umwandeln");
function zeitConverter(fromType, toType, time) {
    if (fromType == "millisecond" && toType == "minute") {
        let newMinutes = time / 60000;
        return newMinutes;
    } else if (fromType == "minute" && toType == "millisecond") {
        let newMilisec = time * 60000;
        return newMilisec;
    } else if (fromType == "hour" && toType == "millisecond") {
        let newMilisec = time * 3600000;
        return newMilisec;
    } else if (fromType == "day" && toType == "millisecond") {
        let newMilisec = time * 86400000;
        return newMilisec;
    } else if (fromType == "year" && toType == "millisecond") {
        let newMilisec = time * 86400000 * 365;
        return newMilisec;
    } else {
        return false;
    }
}
console.log(zeitConverter("millisecond", "minute", 120000)); // => 2
console.log(zeitConverter("minute", "millisecond", 2)); // => 120000
console.log(zeitConverter("hour", "millisecond", 1)); // => 3600000

console.log("Bonus");
console.log(zeitConverter("day", "millisecond", 5)); // => 120000
console.log(zeitConverter("year", "millisecond", 1)); // => 3600000
