// Dropdown toggle
document.querySelector('#toggleDropdown').addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('#myDropdown').classList.toggle('show');
});

// Menu toggle
document.querySelector('#toggler').addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('#side-menu').style.left = '0';

document.querySelector('#hideMenu').addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('#side-menu').style.left = '-240px';
});


// Dropdown toggle
    document.querySelector("#toggleDropdown").addEventListener("click", (e) => {
        e.preventDefault;
        document.querySelector("#myDropdown").classList.toggle("show");
    });

// Toggle side menu active class
const sideLinks = document.querySelectorAll('#side-list li a');
sideLinks.forEach((item) => {
  item.addEventListener('click', (e) => {
    item.className = item.className.replace(' active', '');

    e.currentTarget.classList += ' active';
  });
});
// const changeActive = (e) => {
//     let sideLinks = document.querySelectorAll("#side-list li a");

//     sideLinks.forEach(item => {
//         item.classList = item.classList.replace(" active", "");
//         console.log(e);
//         e.currentTarget.className += "active";
//     });
// }

// Create Red flag record tab
const openForm = (evnt, contentId) => {
  let tabcontent; let
    tablinks;

  // Get all the elements with the class "content" and hide them
  tabcontent = document.querySelectorAll('.tabcontent');

  tabcontent.forEach((item) => {
    item.style.display = 'none';
  });

  // Get all the elements with the class "tablinks" and remove class active
  tablinks = document.querySelectorAll('.tablinks');

  tablinks.forEach((item) => {
    item.className = item.className.replace(' active', '');
  });

  // Show the current tab and add an active class to it
  document.querySelector(contentId).style.display = 'block';
  evnt.currentTarget.className += ' active';
};

// Show Record
const showPage = () => {
  document.querySelector('#full-view').style.top = '0';
  document.querySelector('#full-view').style.zIndex = '3';
  document.querySelector('#full-view').style.backgroundColor = '#333333c9';
};

// Close Record
const closePage = () => {
  document.querySelector('#full-view').style.top = '-200%';
  document.querySelector('#full-view').style.zIndex = '-1';
  document.querySelector('#full-view').style.backgroundColor = 'transparent';
};

// fetch('https://api.binance.com/api/v1/ticker/24hr')
//   .then(res => res.json())
//   .then((data) => {
//     document.querySelector('#toggleDropdown').innerHTML = data[0].priceChange;
//     console.log(data[0]);
//   })
//   .catch(err => console.log(err));
