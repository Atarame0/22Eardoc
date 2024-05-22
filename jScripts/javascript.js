// function toggleNav(){
//     document.getElementById("main-nav").classList.toggle("hide-mobile");
// }

// function toggleNav() {
//     var nav = document.getElementById("main-nav");
//     if (nav.style.width === "250px") {
//         nav.style.width = "0";
//     } else {
//         nav.style.width = "250px";
//     }
// }

function toggleNavBar() {
    var nav = document.getElementById("mobile-nav");
    if (nav.style.width === "250px") {
        nav.style.width = "0";
    } else {
        nav.style.width = "250px";
    }
}



// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }




  
function navigateToDoctorPage() {
    window.location.href = "doctorPage.html";
    console.log("doc");
 }



    // קרוסלה דף בית
document.addEventListener('DOMContentLoaded', () => {
    let list = document.querySelector(".list");

    // Ensure items have been rendered
    let item = document.querySelector(".item");
    let itemWidth;

    // Function to initialize the item width once it's rendered
    const initializeItemWidth = () => {
        item = document.querySelector(".item");
        if (item) {
            itemWidth = item.offsetWidth;
            window.handleClick = function(direction) {
                if(direction === "previous") {
                    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
                } else {
                    list.scrollBy({ left: itemWidth, behavior: "smooth" });
                }
            }
        } else {
            // If the item is not rendered yet, try again after a short delay
            requestAnimationFrame(initializeItemWidth);
        }
    };

    // Call the initialization function initially
    initializeItemWidth();
});


