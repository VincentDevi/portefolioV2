import {gsap} from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


let buttonCheck = true;

const swipeUp = (content,percentage) =>{
    gsap.to(content, {duration: 0.5, translateY: percentage});
}
const scroll = (place) =>{
    gsap.to(document.body,{duration:1, scrollTo:place});
}
const navScale = (scale) =>{
    gsap.to(".navBar__list", {duration: 0.5, scale:scale})
}
const upOrDown = () =>{
    if (buttonCheck){
        swipeUp(".mainContent", "0%");
        swipeUp(".navBar__list", "70%");
        navScale(0.9);
    }
    else{
        (window.screen.width <600) ? swipeUp(".mainContent", "-100%"): swipeUp(".mainContent", "-50%");


        swipeUp(".navBar__list", "0%");
        navScale(1);
    }
}
const button = document.getElementById("button");
button.addEventListener("click", event=>{
    (buttonCheck) ? buttonCheck= false : buttonCheck = true;
    upOrDown();
})

const contactPage = document.getElementById("contactNav");
contactPage.addEventListener("click", event =>{
    (buttonCheck) ? buttonCheck= false : buttonCheck = true;
    upOrDown();
    scroll("#contacts");
})
const projectsPage = document.getElementById("projectNav");
projectsPage.addEventListener("click", event =>{
    (buttonCheck) ? buttonCheck= false : buttonCheck = true;
    upOrDown();
    scroll("#projects");
})
const homePage = document.getElementById("homeNav");
homePage.addEventListener("click", event =>{
    (buttonCheck) ? buttonCheck= false : buttonCheck = true;
    upOrDown();
    scroll("#home");
})
const projectScroll = (place) =>{
    gsap.to(document.getElementById("projects"),{duration:1, scrollTo:place});
}
const arrow = document.getElementById("arrow");
arrow.addEventListener("click", event =>{
    projectScroll("#my-work");
})