// Dropdown toggle
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//Menu toggle
document.getElementById("toggler").addEventListener("click", function(e) {
    e.preventDefault;
    document.getElementById("side-menu").style.left="0";
});

document.getElementById("hideMenu").addEventListener("click", function(e) {
    e.preventDefault;
    document.getElementById("side-menu").style.left="-240px";
});