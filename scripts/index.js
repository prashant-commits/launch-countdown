import { createStars } from "./stars.js";
import Flip from  "./flip.js"

const main = document.querySelector("main");
const starsContainer = main.querySelector(".stars-container");
const seconds1Container = main.querySelector("#seconds-1");
const seconds2Container = main.querySelector("#seconds-2");
const hours1Container = main.querySelector("#hours-1");
const hours2Container = main.querySelector("#hours-2");
const minutes1Container = main.querySelector("#minutes-1");
const minutes2Container = main.querySelector("#minutes-2");

createStars(100, starsContainer)

const seconds1Flip = new Flip(0, seconds1Container, (value) => value === 0 ? 9 : value - 1);
const seconds2Flip = new Flip(0, seconds2Container, (value) => value === 0 ? 5 : value - 1);
const hours1Flip = new Flip(4, hours1Container, (value) => value === 0 ? 9 : value - 1);
const hours2Flip = new Flip(2, hours2Container, (value) => value === 0 ? 2 : value - 1);
const minutes1Flip = new Flip(0, minutes1Container, (value) => value === 0 ? 9 : value - 1);
const minutes2Flip = new Flip(0, minutes2Container, (value) => value === 0 ? 5 : value - 1);

let counter = Date.now() + 1000 * 60 * 60 * 24;

setInterval(() => {
    const now = Date.now();
    const diff = counter - now;
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    
    const seconds1 = seconds % 10;
    const seconds2 = Math.floor(seconds / 10);
    const hours1 = hours % 10;
    const hours2 = Math.floor(hours / 10);
    const minutes1 = minutes % 10;
    const minutes2 = Math.floor(minutes / 10);
    

    seconds1Flip.setValue(seconds1);
    seconds2Flip.setValue(seconds2);
    hours1Flip.setValue(hours1);
    hours2Flip.setValue(hours2);
    minutes1Flip.setValue(minutes1);
    minutes2Flip.setValue(minutes2);
}, 250);
