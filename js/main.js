//NAVIGATION
let deskNav = document.querySelector(".desktop-menu");
let ham = document.querySelector(".fa-bars");
let close = document.querySelector(".close")


ham.addEventListener('click', function (){
    deskNav.classList.add("active");
    this.style.display = "none";
    close.style.display = "block";

    // if (menuToggle.classList.contains("fa-bars-change")) {
    //     menuToggle.classList.remove('fa-bars-change');
    // }else {
    //     menuToggle.classList.add('fa-bars-change');
    // }
})

// ham.addEventListener('click', function() {
//     close.style.display = "block";
//     menuToggle.style.display = "none";

// })

close.addEventListener('click', function () {
    deskNav.classList.remove("active");
    ham.style.display = "block";
    close.style.display = "none";

})

// ham.addEventListener('click', function(){
//     mainNav.classList.toggle("active");
//     for (let index = 0; index < hamStrokes.length; index++) {
//         console.log(hamStrokes[index]);
//         if (hamStrokes[index].classList.contains('ham-change')){
//             hamStrokes[index].classList.remove('ham-change');
//         }else{
//             hamStrokes[index].classList.add('ham-change');
//         }
// //         if (hamStrokes[index].style.background === "white") {
// //             hamStrokes[index].style.background = "red";
// //             // console.log(hamStrokes[index]);
// //         } else {
// //             // console.log('hello');
// //             hamStrokes[index].style.background = 'white';
// // }
// }});



// ham.addEventListener('click', function(){
//     if (mainNav.style.display === "none") {
//         mainNav.style.display = "block";
//     }
//     else {
//         mainNav.style.display = "none";}
// })

// mainNav.addEventListener('click', function () {
//     if (ham.style.display === "none") {
//         mainNav.style.display = "block";
//     }
//     else {
//         mainNav.style.display = "none";
//     }
// })


// function showNav (){ 
// var mainNav = document.querySelector(".desktop-nav");
// // ham.addEventListener('click', function(){
//     // deskNav.classList.add("active");
//     if (mainNav.style.display === "none") {
//         mainNav.style.display = "block"; }
//         else { 
//         mainNav.style.display = "none";
//     }
// // });
// }


// function myFuntion() {
//     var nightLife = document.getElementById("nightLife");
//     if (nightLife.innerHTML === "Nightlife") {
//         nightLife.innerHTML = "Memories";
//     } else {
//         nightLife.innerHTML = "Nightlife";
//     }
// }



// setInterval(myFuntion, 2000);