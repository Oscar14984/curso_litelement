import { LitElement, html,css  } from 'lit';

import { buttonStyles  } from '../css/button-style';
import { generalStyles } from '../css/general-style';

export class ButtonComponent extends LitElement {

  static get styles(){
    return [
      buttonStyles,
      generalStyles
    ]
  }
  static get properties() {
    return {
      disabled : {type: String}
    }
  }

  constructor(){
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <button-default class="button-default" @click="${this.clickButton}" ?disabled=${this.disabled}>Default</button-default>

      <button-primary class="button-primary" @click="${this.clickButton}" ?disabled=${this.disabled}>Primary</button-primary>
      
      <button-warning class="button-warning" @click="${this.clickButton}" ?disabled=${this.disabled}>Warning</button-warning>

      <button-secondary class="button-secondary" @click="${this.clickButton}" ?disabled=${this.disabled}>Secondary</button-secondary>

      <button-disabled class="button-disabled" @click="${this.clickButton}" ?disabled=${this.disabled}>Disabled</button-disabled>
    `;
  }

  clickButton(){
    console.log('Diste click en el botón');
  }


}

customElements.define('button-lit', ButtonComponent);