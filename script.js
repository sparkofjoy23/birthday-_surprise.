function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
    });

    // Show the selected page
    document.getElementById(pageId).style.display = "block";

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}