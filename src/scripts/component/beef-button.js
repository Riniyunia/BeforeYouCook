class BeefButton extends HTMLElement {

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
        return this.shadowDOM.querySelector("#beefButton").clickEvent;
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
        #beefButton {
            font-size: 18px;
            padding: 5px 10px;
            border-radius: 8px;
            background-color: transparent;
            outline: none;
            border: 0.5px solid whitesmoke;
            color:#fcc133;
            cursor: pointer;
        }
        
        #beefButton:hover {
            background-color: black;
        }

        @media screen and (max-width: 550px){
            #beefButton {
                font-size: 14px;
                padding: 5px 6px;
            }
        }
        </style>

        <button id="beefButton" type="button">Beef</button>

        `;

        this.shadowDOM.querySelector("#beefButton").addEventListener('click', this._clickEvent);
    }
}

customElements.define("beef-button", BeefButton);