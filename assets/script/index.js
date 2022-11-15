/* eslint-disable @typescript-eslint/no-unused-vars */

let contactCheck = false;

const toggleNav = () =>{
    document.body.dataset.nav = document.body.dataset.nav ==="true" ? "false" : "true";   
}

const contactClicked = () =>{
    if (contactCheck === false){
        const logos = document.getElementsByClassName("socials__social__header__container__logo");
        for (const item of logos) {
            item.classList.add("boumAnimation");
        }
        const titles = document.getElementsByClassName("socials__social__header__title");
        for (const item of titles) {
            item.classList.add("teleportationAnimation");
        }
        const paras = document.getElementsByClassName("socials__social__para");
        for (const item of paras) {
            item.classList.add("xTelepor");
        }

        contactCheck= true;
    }
}

