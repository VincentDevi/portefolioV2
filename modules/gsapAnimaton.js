import {gsap} from 'gsap';
export const swipe = (anchor) =>{
    console.log('ok');
    gsap.to(".mainContent",{duration: 2, scrollTo:anchor});
}

export const swipeUp = () =>{
    gsap.to(".mainContent", {duration: 1, translateY: '50%'});
}