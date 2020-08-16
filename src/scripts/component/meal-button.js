class MealButton extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#randomButton").clickEvent;
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
        #randomButton {
            padding: 16px;
            background-color: #fcc133;
            color: black;
            font-size: 20px;
            font-weight: bold;
            font-family: 'Rubik';
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }
        
        #randomButton:active {
            background-color: black;
            color: #fcc133;
        }

        @media screen and (max-width: 550px){
            
            #randomButton{
                font-size: 16px;
                width: 100%;
            }
        }
        </style>

        <div class="lucky-button">
            <button id="randomButton" type="button">Yes, I Feel Playful Today!</button>
        </div>
        `;

        this.shadowDOM.querySelector("#randomButton").addEventListener('click', this._clickEvent);
    }
}

customElements.define("meal-button", MealButton);