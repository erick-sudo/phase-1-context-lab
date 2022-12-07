// /* Your Code Here */
function createEmployeeRecord(details) {
    return {
        firstName: details[0],
        familyName: details[1],
        title: details[2],
        payPerHour: details[3],
        timeInEvents: [],
        timeOutEvents: []

    }
}

function createEmployeeRecords(records) {
    return records.map(record => {
        return createEmployeeRecord(record)
    })
}

function createTimeInEvent( dateStamp)  {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function createTimeOutEvent(dateStamp)  {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function hoursWorkedOnDate(date) {
    return (this.timeOutEvents.find(event => {
        if(event.date === date) {
            return true
        }
    }).hour - this.timeInEvents.find(event => {
        if(event.date === date) {
            return true
        }
    }).hour)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this,date) * this.payPerHour
}

function allWagesFor() {
    return this.timeInEvents.reduce((accumulator, currentEvent) => {
        return accumulator + wagesEarnedOnDate.call(this , currentEvent.date)
    }, 0)
}

function calculatePayroll(records) {
    return records.reduce((accumulator, employee) => {
        return accumulator + allWagesFor.call(employee)
    }, 0)
}

function findEmployeeByFirstName(records, firstName) {
    return records.find(element => {
        if(element.firstName === firstName) {
            
            return true
        }
    })
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

// const len = word.length
// for(let i=o;i<len/2;i++) {
//     if(word[i] !== word[len-1-i]) {
//         return false
//     }

//     return true
// }
