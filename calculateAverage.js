function calculateAverage(data) {
    let sum = 0;

    for (let student of data) {
        sum += student.score;
    }

    return sum / data.length;
}

module.exports = calculateAverage;
