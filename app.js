// <utv-logo></utv-logo>

class UtvLogo extends HTMLElement {
    constructor() {
        super();
            this.attachShadow({mode: 'open'})
            this.shadowRoot.innerHTML = `<img src="">`
    }    
}

window.customElements.define("utv-logo", UtvLogo);