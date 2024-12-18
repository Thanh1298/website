let courses = [];
let editingCourse = null;

// Hiển thị tab tương ứng
function showTab(tabName) {
    const tabs = document.querySelectorAll('.container');
    tabs.forEach(tab => {
        tab.style.display = tab.id === tabName ? 'block' : 'none';
    });

    const activeTabs = document.querySelectorAll('.tab');
    activeTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="showTab('${tabName}')"]`).classList.add('active');
}

// Thêm khóa học mới hoặc sửa khóa học hiện tại
function addCourse(event) {
    event.preventDefault();

    const courseName = document.getElementById('courseName').value;
    const courseDescription = document.getElementById('courseDescription').value;
    const createdBy = document.getElementById('createdBy').value;
    const createdAt = new Date().toLocaleString();
    const updatedAt = createdAt;

    if (editingCourse) {
        // Cập nhật khóa học
        editingCourse.courseName = courseName;
        editingCourse.courseDescription = courseDescription;
        editingCourse.createdBy = createdBy;
        editingCourse.createdAt = editingCourse.createdAt; // Giữ nguyên ngày tạo
        editingCourse.updatedAt = updatedAt;
        alert('Khóa học đã được cập nhật!');
        editingCourse = null;
    } else {
        // Tạo khóa học mới
        const newCourse = {
            id: courses.length + 1,
            courseName,
            courseDescription,
            createdBy,
            createdAt,
            updatedAt
        };
        courses.push(newCourse);
        alert('Khóa học đã được thêm!');
    }

    updateCourseList();
    resetForm();
}

// Cập nhật danh sách khóa học
function updateCourseList() {
    const courseListElement = document.getElementById('courseList');
    courseListElement.innerHTML = '';
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course-item');
        courseDiv.innerHTML = `
            <p><strong>${course.courseName}</strong></p>
            <button onclick="viewCourseDetails(${course.id})">Xem Chi Tiết</button>
        `;
        courseListElement.appendChild(courseDiv);
    });
}

// Hiển thị chi tiết khóa học trong modal
function viewCourseDetails(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    document.getElementById('modalCourseId').innerText = course.id;
    document.getElementById('modalCourseName').innerText = course.courseName;
    document.getElementById('modalCourseDescription').innerText = course.courseDescription;
    document.getElementById('modalCreatedBy').innerText = course.createdBy;
    document.getElementById('modalCreatedAt').innerText = course.createdAt;
    document.getElementById('modalUpdatedAt').innerText = course.updatedAt;

    // Hiển thị modal
    document.getElementById('courseDetailsModal').style.display = 'block';
}

// Đóng modal
function closeModal() {
    document.getElementById('courseDetailsModal').style.display = 'none';
}

// Xóa khóa học
function deleteCourse(courseId) {
    courses = courses.filter(course => course.id !== courseId);
    updateCourseList();
    closeModal();
}

// Chỉnh sửa khóa học (điền thông tin vào form để sửa)
function editCourse(course) {
    // Đóng modal chi tiết khóa học
    closeModal();

    // Điền thông tin khóa học vào form
    document.getElementById('courseName').value = course.courseName;
    document.getElementById('courseDescription').value = course.courseDescription;
    document.getElementById('createdBy').value = course.createdBy;
    document.getElementById('createdAt').value = course.createdAt;
    document.getElementById('updatedAt').value = course.updatedAt;

    // Đánh dấu khóa học đang được chỉnh sửa
    editingCourse = course;

    // Chuyển đến tab tạo khóa học để sửa
    showTab('create');

// Đặt lại form
function resetForm() {
    document.getElementById('courseForm').reset();
    document.getElementById('createdAt').value = '';
    document.getElementById('updatedAt').value = '';
    editingCourse = null;

}
}
