import { LightningElement, api } from 'lwc';

export default class AccountModal extends LightningElement {
    @api showModal;
    closeModal() {
        this.showModal = !this.showModal;
    }
}