import "../component/meal-list.js";
import "../component/search-bar.js";
import "../component/meal-button.js";
import "../component/cake-button.js";
import "../component/beef-button.js";
import RandomMeal from "../data/meal-random.js";
import CakeMeal from "../data/meal-cake.js";
import BeefMeal from "../data/meal-beef.js";
import MealData from "../data/meal-data.js";

const main = () => {
    const searchForm = document.querySelector("search-bar");
    const randomButton = document.querySelector("meal-button");
    const cakeButton = document.querySelector("cake-button");
    const beefButton = document.querySelector("beef-button");
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
};

export default main;