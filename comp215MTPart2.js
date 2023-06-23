//This function is checking for CoursecreditUnits(CCU ID) FOR EVERY ROW
function setCreditUnits(row) {
    console.log(row)
    var selections
    if (row === 1) {
        selections = document.getElementById("first")
    } else if (row === 2) {
        selections = document.getElementById("second")
    }else if (row === 3) {
        selections = document.getElementById("third")
    }else if (row === 4) {
        selections = document.getElementById("fourth")
    }else if (row === 5) {
        selections = document.getElementById("fifth")
    }else if (row === 6) {
        selections = document.getElementById("sixth")
    }


    for (let index = 0; index < selections.options.length; index++) {
        const element = selections.options[index];
        if (element.selected === true) {
            if (row === 1) {
                document.getElementById("CCU1").value = element.value
            } else if (row === 2) {
                document.getElementById("CCU2").value = element.value
            } else if (row === 3) {
                document.getElementById("CCU3").value = element.value
            }else if (row === 4) {
                document.getElementById("CCU4").value = element.value
            }else if (row === 5) {
                document.getElementById("CCU5").value = element.value
            }else if (row === 6) {
                document.getElementById("CCU6").value = element.value
            }
        }
    }
}

// This function calculate the Course Grade mark ,
//the Total Grade points and AveragePoints

function Calculate() {
    var sum = 0
    for (let i = 1; i <= 6; i++) {
        getCourseGrade("CGP" + i).value = getCourseCreditUnits("CCU" + i) * (getCourseGradeMark("CCM" + i))
        sum = sum + Number(getCourseGrade("CGP" + i).value)
    }
    getTotalGradePoints("CGP7").value = sum
    getAverageGradePoints("CGP8").value =  parseFloat(getTotalGradePoints("CGP7").value/6).toFixed(2)
}

function getCourseGrade(id){
    return document.getElementById(id)
    }

function getCourseCreditUnits(id){
    return document.getElementById(id).value
    }
function getCourseGradeMark(id){
    return document.getElementById(id).value
    }
function getTotalGradePoints(id){
    return document.getElementById(id)
    }
function getAverageGradePoints (id){
    return document.getElementById(id)
    } 
