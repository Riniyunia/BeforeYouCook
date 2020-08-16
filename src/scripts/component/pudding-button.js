class PuddingButton extends HTMLElement {

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
        return this.shadowDOM.querySelector("#puddingButton").clickEvent;
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
        #puddingButton {
            font-size: 18px;
            padding: 5px 10px;
            border-radius: 8px;
            background-color: transparent;
            outline: none;
            border: 0.5px solid whitesmoke;
            color:#fcc133;
            cursor: pointer;
        }
        
        #puddingButton:hover {
            background-color: black;
        }

        @media screen and (max-width: 550px){
            #puddingButton {
                font-size: 14px;
                padding: 5px 6px;
            }
        }
        </style>

        <button id="puddingButton" type="button">Pudding</button>

        `;

        this.shadowDOM.querySelector("#puddingButton").addEventListener('click', this._clickEvent);
    }
}

customElements.define("pudding-button", PuddingButton);