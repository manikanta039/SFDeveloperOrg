import { LightningElement } from 'lwc';

export default class DynamicMsg extends LightningElement {

    msg = 'mani<b>abc</b>'
    temp = '<p>hello <b>bold</b></p>'
    richtext = this.temp
}