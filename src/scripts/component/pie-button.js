class PieButton extends HTMLElement {

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
        return this.shadowDOM.querySelector("#pieButton").clickEvent;
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
        #pieButton {
            font-size: 18px;
            padding: 5px 10px;
            border-radius: 8px;
            background-color: transparent;
            outline: none;
            border: 0.5px solid whitesmoke;
            color:#fcc133;
            cursor: pointer;
        }
        
        #pieButton:hover {
            background-color: black;
        }

        @media screen and (max-width: 550px){
            #pieButton {
                font-size: 14px;
                padding: 5px 6px;
            }
        }
        </style>

        <button id="pieButton" type="button">Pie</button>

        `;

        this.shadowDOM.querySelector("#pieButton").addEventListener('click', this._clickEvent);
    }
}

customElements.define("pie-button", PieButton);