// Xử lý đăng nhập
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Kiểm tra xác thực (cho mục đích demo)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'student' && password === '1234') {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
    } else {
        alert('Tên người dùng hoặc mật khẩu không chính xác!');
    }
});

// Lọc bài tập theo ngôn ngữ và tìm kiếm
document.getElementById('filter').addEventListener('change', filterExercises);
document.getElementById('search').addEventListener('input', filterExercises);

function filterExercises() {
    const filterValue = document.getElementById('filter').value;
    const searchValue = document.getElementById('search').value.toLowerCase();
    const exercises = document.querySelectorAll('.exercise');

    exercises.forEach(exercise => {
        const language = exercise.getAttribute('data-language');
        const title = exercise.querySelector('h3').textContent.toLowerCase();
        const isLanguageMatch = (filterValue === 'all' || language === filterValue);
        const isSearchMatch = title.includes(searchValue);

        if (isLanguageMatch && isSearchMatch) {
            exercise.style.display = 'block';
        } else {
            exercise.style.display = 'none';
        }
    });
}

// Tải mẫu code đã định trước
function loadPredefinedCode(language) {
    var codeEditor = document.getElementById('code-editor');
    if (language === 'c') {
        codeEditor.value = `#include <stdio.h>
int main() {
    for (int i = 1; i <= 10; i++) {
        printf("Bảng cửu chương %d:\n", i);
        for (int j = 1; j <= 10; j++) {
            printf("%d x %d = %d\n", i, j, i * j);
        }
        printf("\n");
    }
    return 0;
}`;
    } else if (language === 'python') {
        codeEditor.value = `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b

fibonacci(10)`;
    } else if (language === 'java') {
        codeEditor.value = `public class Factorial {
    public static void main(String[] args) {
        int num = 5; // Giai thừa của số này
        int result = factorial(num);
        System.out.println("Giai thừa của " + num + " là " + result);
    }

    static int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
}`;
    } else {
        codeEditor.value = '';
    }
}

// Giả lập việc chạy mã
document.getElementById('run-code').addEventListener('click', function() {
    var code = document.getElementById('code-editor').value;
    var outputElement = document.getElementById('output');
    outputElement.textContent = '';

    // Giả lập việc chạy mã
    outputElement.textContent = 'Chạy thành công!';
    document.getElementById('results').classList.remove('hidden');
});

// Xóa mã trong trình soạn thảo
document.getElementById('clear-code').addEventListener('click', function() {
    document.getElementById('code-editor').value = '';
    document.getElementById('results').classList.add('hidden');
});

// Nộp bài
document.getElementById('submit-code').addEventListener('click', function() {
    alert('Bài tập đã được nộp!');
});
