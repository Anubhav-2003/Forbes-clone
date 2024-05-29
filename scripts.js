document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");
    const articles = document.querySelectorAll(".articles article");
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.getElementById("nav-list");

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const addAnimationClass = (element) => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    };

    addAnimationClass(mainContent);

    const scrollHandler = () => {
        articles.forEach(article => {
            if (isInViewport(article)) {
                addAnimationClass(article);
            }
        });
    };

    window.addEventListener("scroll", scrollHandler);

    scrollHandler();

    menuIcon.addEventListener("click", () => {
        navList.classList.toggle("active");
        menuIcon.classList.toggle("change");
    });
});
