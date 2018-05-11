const $ = require("jquery")

const makeCard = (name, department, computers) => {
    const card = document.createElement("section")
    card.className = "empCard"
    const empName = document.createElement("p")
    empName.textContent = `Name: ${name}`
    card.appendChild(empName)
    const empDept = document.createElement("p")
    empDept.textContent = `Dept: ${department}`
    card.appendChild(empDept)
    const empComps = document.createElement("p")
    empComps.textContent = `Computers: ${computers}`
    card.appendChild(empComps)
    $("#card-viewer").append(card)
}

module.exports = makeCard