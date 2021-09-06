// Nav bar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//Button on home page
function linkToProject() {
    window.open("https://fmundergrad.hunter.cuny.edu/~laik/finalproject/index.html", "_blank");
}
