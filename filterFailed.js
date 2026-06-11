function filterFailed(data, passScore) {
    let failedStudents = [];

    for (let student of data) {
        if (student.score < passScore) {
            failedStudents.push(student.name);
        }
    }

    return failedStudents;
}

module.exports = filterFailed;