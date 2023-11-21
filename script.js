let totalcredit = 0;
let totalgrade = 0;
let courseCount = 0;

function addCourse() {
    const Grade = parseFloat(document.getElementById("grade").value);
    const Credit = parseInt(document.getElementById("credit").value);

    if (isNaN(Grade) || isNaN(Credit) || Credit <= 0) {
        alert("Please enter valid values.");
        return;
    }

    const gradePoints = Grade * Credit;
    totalcredit += Credit;
    totalgrade += gradePoints;

    const currentGPA = totalgrade / totalcredit;

    courseCount++;
    const courseListDiv = document.getElementById("courseList");
    const courseDiv = document.createElement("div");
    courseDiv.innerHTML = `<p>Course ${courseCount}: Grade - ${Grade}, Credits - ${Credit}</p>`;
    courseListDiv.appendChild(courseDiv);

    document.getElementById("result").innerText = `Current GPA: ${currentGPA.toFixed(2)}`;
}

function sendEmail() {
    const currentGPA = totalgrade / totalcredit;
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
