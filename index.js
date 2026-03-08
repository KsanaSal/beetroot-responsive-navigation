document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".sidebar__toggle");

    if (!sidebar || !toggleBtn) return;

    const arrowIcon = toggleBtn.querySelector(".icon-arrow");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("expanded");

        // Поворот стрілки
        arrowIcon.style.transform = sidebar.classList.contains("expanded")
            ? "rotate(180deg)"
            : "rotate(0deg)";
    });
});
