let createEmployeeRecord = function(employee){
    return {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
}
const getHour = function(dateTime) {
    return parseInt(dateTime.match(/\d{4}$/)[0])
}
const getDate = function(dateTime) {
    return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0]
}
function createTimeInEvent(timeIn) {
    this.timeInEvents.push({
        type: "TimeIn",
        date: getDate(timeIn),
        hour: getHour(timeIn)
    })
    return this;
}
function createTimeOutEvent(timeOut) {
    this.timeOutEvents.push({
        type: "TimeOut",
        date: getDate(timeOut),
        hour: getHour(timeOut)
    })
    return this;
}
function hoursWorkedOnDate(dateGiven) {
    let timeIn = this.timeInEvents.find(event =>
        event.date == dateGiven)
    let timeOut = this.timeOutEvents.find(event =>
        event.date == dateGiven)
    let totalTime = (timeOut.hour - timeIn.hour) / 100
    return totalTime;
}
function wagesEarnedOnDate(dateGiven) {
    let hours = hoursWorkedOnDate.call(this, dateGiven)
    return this.payPerHour * hours;
}
function findEmployeeByFirstName(array, name) {
    return array.find(employee => employee.firstName == name)
}
function calculatePayroll(employeeRecord) {
    return employeeRecord.reduce((total, employee) => {
        return total + allWagesFor.call(employee)
    }, 0)
}