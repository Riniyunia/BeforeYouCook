import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./styles/style.css";
import "./styles/header-bar.css"
import "./18880.jpg";
import main from "./scripts/view/main.js";

$(document).ready(function(){
    $('#recipeButton').click(function(){
        $('.box').toggle();
    });		
});

document.addEventListener("DOMContentLoaded", main);