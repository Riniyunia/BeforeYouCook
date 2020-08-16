import "../component/meal-list.js";
import "../component/search-bar.js";
import "../component/meal-button.js";
import "../component/cake-button.js";
import "../component/beef-button.js";
import "../component/tart-button.js";
import "../component/pudding-button.js";
import "../component/pie-button.js";
import RandomMeal from "../data/meal-random.js";
import CakeMeal from "../data/meal-cake.js";
import BeefMeal from "../data/meal-beef.js";
import TartMeal from "../data/meal-tart.js";
import PuddingMeal from "../data/meal-pudding.js";
import PieMeal from "../data/meal-pie.js";
import MealData from "../data/meal-data.js";

const main = () => {
    const searchForm = document.querySelector("search-bar");
    const randomButton = document.querySelector("meal-button");
    const cakeButton = document.querySelector("cake-button");
    const beefButton = document.querySelector("beef-button");
    const pieButton = document.querySelector("pie-button");
    const puddingButton = document.querySelector("pudding-button");
    const tartButton = document.querySelector("tart-button");
    const mealListElement = document.querySelector("meal-list");
    
    const onButtonSearchClicked = () => {
        MealData.searchMeal(searchForm.value)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const onButtonRandomClicked = () => {
        RandomMeal.searchRandomMeal(randomButton)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const onButtonCakeClicked = () => {
        CakeMeal.searchCakeMeal(cakeButton)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const onButtonBeefClicked = () => {
        BeefMeal.searchBeefMeal(beefButton)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const onButtonPieClicked = () => {
        PieMeal.searchPieMeal(pieButton)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const onButtonTartClicked = () => {
        TartMeal.searchTartMeal(tartButton)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const onButtonPuddingClicked = () => {
        PuddingMeal.searchPuddingMeal(puddingButton)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchForm.clickEvent = onButtonSearchClicked;
    randomButton.clickEvent = onButtonRandomClicked;
    cakeButton.clickEvent = onButtonCakeClicked;
    beefButton.clickEvent = onButtonBeefClicked;
    pieButton.clickEvent = onButtonPieClicked;
    tartButton.clickEvent = onButtonTartClicked;
    puddingButton.clickEvent = onButtonPuddingClicked;
};

export default main;