document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM is Ready!");

    var menuButton = document.getElementById('pancake-menu');
    var nav = document.getElementById('main-nav');

    let headerNav = document.querySelector ("header nav");
    let headerUL = document.querySelector ("header ul");

    headerNav.addEventListener("click",
    function() {
        console.log("Nav was clicked");

        headerUL.classList.toggle("collapsed");
        headerNav.classList.toggle("expanded");
    })
})