let totalCredits = 0;
let totalGradePoints = 0;
let courseCount = 0;

function addCourse() {
    const selectedGrade = parseFloat(document.getElementById("grade").value);
    const enteredCredits = parseInt(document.getElementById("credit").value);

    if (isNaN(selectedGrade) || isNaN(enteredCredits) || enteredCredits <= 0) {
        alert("Please enter valid values.");
        return;
    }

    const gradePoints = selectedGrade * enteredCredits;
    totalCredits += enteredCredits;
    totalGradePoints += gradePoints;

    const currentGPA = totalGradePoints / totalCredits;

    courseCount++;
    const courseListDiv = document.getElementById("courseList");
    const courseDiv = document.createElement("div");
    courseDiv.innerHTML = `<p>Course ${courseCount}: Grade - ${selectedGrade}, Credits - ${enteredCredits}</p>`;
    courseListDiv.appendChild(courseDiv);

    document.getElementById("result").innerText = `Current GPA: ${currentGPA.toFixed(2)}`;
}

function sendEmail() {
    const currentGPA = totalGradePoints / totalCredits;
    const recipientEmail = prompt("Enter your email address:");
    
    if (!recipientEmail || !validateEmail(recipientEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Email sent to: ${recipientEmail}\nGPA: ${currentGPA.toFixed(2)}`);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
