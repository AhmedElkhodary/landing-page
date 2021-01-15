/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
    // secect all Sections
    const sections = document.querySelectorAll('section');
    // select ul element in navbar
    const navbar = document.getElementById('navbar__list');
    // set number of sections
    let items_num = sections.length;


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// get Section Information (ID, Data-nav)
function Section_info(section) {
  // set section Id attribute
  let id   = section.getAttribute('id');
  // set data attribute
  let name = section.getAttribute('data-nav');
  // set array to store id & data
  let arr = [id,name];
  return arr;
}



//check if section in viewposrt or not
function postion_check(elem) {
  let pos = elem.getBoundingClientRect();
  return (pos.top >= 0 &&
          pos.left >= 0 &&
          pos.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          pos.right <= (window.innerWidth || document.documentElement.clientWidth));
}






/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function nav_bulid(){
  for(let i = 0; i <= items_num-1; i++){
    // set an array to store the return values from Section_info Function
    let arr =  Section_info(sections[i]);
    // Create new list element in ul
    let listItem = document.createElement('li');
    // add anchor into each list with (href=id & value = section name)
    listItem.innerHTML = `<a class='menu__link' href='#${arr[0]}'>${arr[1]}</a>`;
    //Add the New list to Navbar
    navbar.appendChild(listItem);
  }
}




// Add class 'active' to section when near top of viewport
function setActiveClass(){
    for (let i=0; i < items_num-1; i++){
        // check if section is appears
        if (postion_check(sections[i])){
            // set 'your-active-class' to the sestion classes
            sections[i].classList.add("your-active-class");
        }else{
            // remove 'your-active-class' from the sestion classes
            sections[i].classList.remove("your-active-class");
        }
    }
}


// Scroll to anchor ID using scrollTO event
document.addEventListener('scroll', function(){
    setActiveClass();
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
nav_bulid();

// Scroll to section on link click

// Set sections as active
