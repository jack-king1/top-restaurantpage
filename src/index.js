import "./styles.css";
import { greeting } from "./greeting.js";
import {loadMenu, loadHome, loadContact, loadAbout} from "./page-load.js"

const pageArray = {};
let contentDiv = "";


function changePage(pageID){
    contentDiv.innerHTML = "";
    contentDiv.innerHTML = pageArray[pageID];
}

function getCotnentDiv(){
    contentDiv= document.getElementById("content");
}

function initPages(){
    pageArray[0] = loadHome();
    pageArray[1] = loadMenu();
    pageArray[2] = loadAbout();
    pageArray[3] = loadContact();
    console.log(pageArray);
}

function addEventListenerToNavBtns(){
    const navBtns = document.getElementsByClassName("nav-btn");
    console.log(navBtns);
    for(let btn of navBtns){
        btn.addEventListener("click", () => changePage(btn.getAttribute("btn-id")));

    }
}

initPages();
getCotnentDiv();
addEventListenerToNavBtns();
//changePage(0);