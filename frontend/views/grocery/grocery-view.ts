import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { View } from '../../views/view.js';
import '@vaadin/text-field';
import '@vaadin/number-field';
import '@vaadin/button';
import '@vaadin/grid';

@customElement('grocery-view')
export class GroceryView extends View {
  @property({ type: String }) item = '';
  @property({ type: Number }) quantity = 0;


  render() {
    return html`
      <h1>Welcome to the Grocery App</h1>
      <div>
        <vaadin-text-field
          label="Item"
          placeholder="Enter item"
          @change="${this.itemChanged}"
        ></vaadin-text-field>
        <vaadin-number-field
          label="Quantity"
          placeholder="Enter quantity"
          @change="${this.quantityChanged}"
        ></vaadin-number-field>
        <vaadin-button @click="${this.addItem}">Add</vaadin-button>
      </div>
    `;
  }

  
  itemChanged(e: CustomEvent) {
    this.item = e.detail.value;
  }

  quantityChanged(e: CustomEvent) {
    this.quantity = e.detail.value;
  }

  addItem() {
    this.dispatchEvent(new CustomEvent('item-added', {
      detail: {
          item: this.item,
          quantity: this.quantity
      },
      bubbles: true, // This event bubbles up through the DOM
      composed: true // This event can cross the shadow DOM boundary
  }));
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(
      'flex',
      'flex-col',
      'h-full',
      'items-center',
      'justify-center',
      'p-l',
      'text-center',
      'box-border'
    );
  }
}
