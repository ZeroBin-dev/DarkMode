// 다크 모드 버튼 제어
document.getElementById("toggle-dark-mode").addEventListener("click", function () {
    const body = document.body;
    const button = this;

    // 다크 모드 상태 토글
    body.classList.toggle("dark-mode");

    // 버튼 텍스트 업데이트
    if (body.classList.contains("dark-mode")) {
        button.textContent = "다크 모드 끄기";
    } else {
        button.textContent = "다크 모드 켜기";
    }
});
