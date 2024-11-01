function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab");
    const containers = document.querySelectorAll(".container");

    tabs.forEach(tab => tab.classList.remove("active"));
    containers.forEach(container => container.style.display = "none");

    document.querySelector(`#${tabId}`).style.display = "block";
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add("active");
}

function addCourse(event) {
    event.preventDefault();
    const courseName = document.getElementById("courseName").value;
    const courseDescription = document.getElementById("courseDescription").value;
    const createdBy = document.getElementById("createdBy").value;

    const courseList = document.getElementById("courseList");
    const courseId = Date.now();

    const courseElement = document.createElement("div");
    courseElement.className = "course";
    courseElement.innerHTML = `
        <h3>${courseName}</h3>
        <p>${courseDescription}</p>
        <button onclick="showCourseDetails(${courseId})">Chi Tiết</button>
    `;
    courseList.appendChild(courseElement);

    clearForm();
}

function clearForm() {
    document.getElementById("courseForm").reset();
}

function showCourseDetails(courseId) {
    const modal = document.getElementById("courseDetailsModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("courseDetailsModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("courseDetailsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
