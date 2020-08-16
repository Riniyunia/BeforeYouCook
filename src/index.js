import $ from "jquery";
import "./styles/style.css";
import "./styles/header-bar.css";
import "./styles/hide-button.css";
import "./styles/cat-button.css";
import "./18880.jpg";
import main from "./scripts/view/main.js";

$(document).ready(function(){
    $('#hideButton').click(function(){
        $('.box').toggle();
    });		
});

document.addEventListener("DOMContentLoaded", main);