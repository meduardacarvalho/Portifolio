

window.onscroll = function () {
    const backToTopButton = document.getElementById('backToTop');
    if (document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
