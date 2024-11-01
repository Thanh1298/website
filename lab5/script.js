 function openTab(evt, tabName) {
        // Ẩn tất cả nội dung của các tab
        let contents = document.getElementsByClassName("content");
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.display = "none"; 
        }

        // Ẩn các tab khác
        let tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }

        // Hiện nội dung của tab hiện tại và thêm class "active" cho nút đã nhấn
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.classList.add("active");
    }
  // Tự động gọi hàm mở tab đầu tiên khi trang được tải
  window.onload = () => {
        document.querySelector('.Cer').click(); // Nhấn tab đang hoạt động
    };