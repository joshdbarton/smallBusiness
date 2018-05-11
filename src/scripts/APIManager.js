const $ = require("jquery")
const APIManager = Object.create({},
    {
        allEmployees: {
            value: function () {return $.ajax("http://localhost:8088/employees")}
        },
        allDepts: {
            value: function () {return $.ajax("http://localhost:8088/departments")}
        },
        allComps: {
            value: function () {return $.ajax("http://localhost:8088/computers")}
        },
        empComps: {
            value: function () {return $.ajax("http://localhost:8088/employeeComputers")}
        }
    }
)

module.exports = APIManager

//sample data structure:
// {
//     "computers": [
//         {
//             "compId": 1,
//             "deptId": 1,
//             "make": "Apple",
//             "type": "laptop"
//         }
//     ],
//     "departments": [
//         {
//             "deptId": 1,
//             "name": "engineering",
//             "floor": 2
//         }
//     ],
//     "employees": [
//         {
//             "empId": 1
//             "name": "Josh Barton"
//             "title": "engineer I"
//             "deptId": 1
//         }
//     ],
//     "employeeComputers": [
//         {
//             "id": 1,
//             "empId": 1,
//             "compId": 1
//         }
//     ]
// }