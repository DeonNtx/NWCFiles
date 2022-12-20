import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
​
// define the component
export class CustomInput extends LitElement {
  // return a promise for contract changes.
  static async getMetaConfig() {
    return {
      controlName: 'Deon Test 001',
      fallbackDisableSubmit: false,
      version: '0.1',
    };
  }
​
  render() {
    return html`<input placeholder="Deon Test 001" />`;
  }
}
​
// registering the web component
const elementName = 'deontest-001-input';
customElements.define(elementName, CustomInput);