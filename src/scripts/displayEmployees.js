const APIManager = require("./APIManager")
const makeCard = require("./cardMaker")


const displayEmployees = () => {
    Promise.all([APIManager.allEmployees(), APIManager.allDepts(), APIManager.empComps()]).then(function(values) {
            values[0].forEach(employee => {
                const name = employee.name
                const department = values[1].find(department => department.deptId === employee.deptId).name
                const computers = values[2].filter(id => id.empId === employee.empId).map(id => id.compId).join(", ")
                makeCard(name, department, computers)
            })
        })
    }

module.exports = displayEmployees