import { Controller } from '@hotwired/stimulus';

export default class extends Controller<HTMLElement> {
    static values = {
        textToCopy: String,
        successMessage: String,
        targetInputSelector: String,
    }

    declare textToCopyValue: string;
    declare targetInputSelectorValue: string;

    connect() {
        this.element.addEventListener('click', this._copyToClipboard.bind(this));
    }

    disconnect() {
        this.element.removeEventListener('click', this._copyToClipboard.bind(this));
    }

    private _copyToClipboard() {
        let textToCopy: string | undefined;

        if (this.textToCopyValue.length !== 0) {
            textToCopy = this.textToCopyValue;
        } else if (this.targetInputSelectorValue.length !== 0) {
            const input = document.querySelector<HTMLInputElement>(this.targetInputSelectorValue);
            if (input) {
                textToCopy = input.value;
            }
        } else {
            textToCopy = this.element.innerText;
        }

        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => this.onSuccessCopy())
                .catch(() => this.onFailedCopy());
        }
    }

    protected onSuccessCopy() {}

    protected onFailedCopy() {}
}
