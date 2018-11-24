// Dropdown toggle
    document.querySelector("#toggleDropdown").addEventListener("click", function(e) {
        document.querySelector("#myDropdown").classList.toggle("show");
    });

//Menu toggle
document.querySelector("#toggler").addEventListener("click", function(e) {
    e.preventDefault;
    document.querySelector("#side-menu").style.left="0";
});

document.querySelector("#hideMenu").addEventListener("click", function(e) {
    e.preventDefault;
    document.querySelector("#side-menu").style.left="-240px";
});

//Create Red flag record tab
function openForm(evnt, contentId) {
    let tabcontent, tablinks;

    // Get all the elements with the class "content" and hide them
    tabcontent = document.querySelectorAll(".tabcontent");
    
    tabcontent.forEach(function(item){
        item.style.display="none";
    });

    // Get all the elements with the class "tablinks" and remove class active
    tablinks = document.querySelectorAll(".tablinks");

    tablinks.forEach(function(item){
        item.className = item.className.replace(" active", "");
    });

    // Show the current tab and add an active class to it
    document.querySelector(contentId).style.display="block";
    evnt.currentTarget.className += " active";
}