import * as convert from "color-convert";

class Color {
    #hsl;
    #hex;
    #element;

    constructor(hsl) {
        this.#hsl = hsl;
        this.#hex = `#${convert.hsl.hex(hsl)}`;
        this.#element = this.#generateColorElement();
    }

    #generateColorElement() {
        const colorElement = document.createElement("div");
        colorElement.classList.add("color");
        colorElement.dataset.color = this.#hex;
        colorElement.style.backgroundColor = this.#hex;

        const textElement = document.createElement("p");
        textElement.textContent = this.#hex;
        textElement.style.color = this.#hsl[2] < 60 ? "#ffffff" : "#000000";

        colorElement.appendChild(textElement);

        return colorElement;
    }

    display(parentElement) {
        parentElement.appendChild(this.#element);
        return this;
    }
}

export default Color;
