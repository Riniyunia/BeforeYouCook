import "./meal-item.js";

class MealList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

   /* connectedCallback() {
        this.render();
    }*/

    render() {
        this.shadowDOM.innerHTML = "";
        const mealItemElement = document.createElement("meal-item");

        if (this._meals !== undefined) {
            this._meals.forEach(meal => {
                mealItemElement.meal = meal;
                this.shadowDOM.appendChild(mealItemElement);
            })
        }
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `<style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>
        `;
        this.shadowDOM.innerHTML += `<p class="placeholder">${message}<p>`;
    }
}

customElements.define("meal-list", MealList);