class TartButton extends HTMLElement {

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
        return this.shadowDOM.querySelector("#tartButton").clickEvent;
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
        #tartButton {
            font-size: 18px;
            padding: 5px 10px;
            border-radius: 8px;
            background-color: transparent;
            outline: none;
            border: 0.5px solid whitesmoke;
            color:#fcc133;
            cursor: pointer;
        }
        
        #tartButton:hover {
            background-color: black
        }

        @media screen and (max-width: 550px){
            #tartButton {
                font-size: 14px;
                padding: 5px 6px;
            }
        }
        </style>

        <button id="tartButton" type="button">Tart</button>

        `;

        this.shadowDOM.querySelector("#tartButton").addEventListener('click', this._clickEvent);
    }
}

customElements.define("tart-button", TartButton);