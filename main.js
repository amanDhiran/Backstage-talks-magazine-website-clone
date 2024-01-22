// let body = document.querySelector("body")

// const partInsideViewport = (el) => {
//     const bounding = el.getBoundingClientRect();

//     if (
//         bounding.top < window.innerHeight 
//         && bounding.top > -bounding.height 
//         && bounding.left < window.innerWidth 
//         && bounding.left > -bounding.width
//     ) {
//         console.log("Yes, part of the element is inside the viewport");
//         // body.style.background = "white"
//         return true
//     } else {
//         console.log("No, part of the element is NOT inside the viewport");
//         return false
//     }
// };

// let section2 = document.getElementById("section2");
// partInsideViewport(section2)

// gsap.to("body", {
//     background: "white",
//     scrollTrigger:{
//         trigger: "#section2",
//         scroller: "body",
//         markers: true,
//         start: "top 100%",
//         // end: "top 1px",
//         // scrub: 0
//     }
// })

const sections = document.querySelectorAll("section")
const body = document.querySelector("body")
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        handleColor(entry.target.id);
    });
},
    {
        root: null,
        rootMargin: "-300px",
        threshold: 0
    });

function handleColor(entry) {
    switch (entry) {
        case 'section1':
            body.style.background = "#ff608c";
            break;
        case 'section2':
            body.style.background = "white"
            break;
        case 'section3':
            body.style.background = "#00c1b5";
            break;
        case 'section4':
            body.style.background = "#ff651a"
            break;
        case 'section5':
            body.style.background = "#ffbe00";
            break;
        case 'section6':
            body.style.background = "#1d3fbb"
            break;
        case 'section7':
            body.style.background = "#e30512";
            break;
    }
}

sections.forEach(section => { observer.observe(section) })


