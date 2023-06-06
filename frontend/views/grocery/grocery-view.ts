import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { View } from '../../views/view.js';
import '@vaadin/text-field';
import '@vaadin/number-field';
import '@vaadin/button';
import '@vaadin/grid';
import GroceryItem from 'Frontend/generated/com/example/application/GroceryItem.js';
import { GroceryEndpoint } from 'Frontend/generated/endpoints.js';
import GroceryItemModel from 'Frontend/generated/com/example/application/GroceryItemModel.js';
import { Binder, field } from '@hilla/form';


@customElement('grocery-view')
export class GroceryView extends View {
  

  @state() groceryItems: GroceryItem[] = [];
  private binder = new Binder(this, GroceryItemModel);


  render() {
    const {model } = this.binder;

    return html`
      <h1>Welcome to the Grocery App</h1>
      <div>
        <vaadin-text-field
          label="Item"
          placeholder="Enter item"
          ${field(model.name)}
        ></vaadin-text-field>
        <vaadin-number-field
          label="Quantity"
          placeholder="Enter quantity"
        ${field(model.quantity)}
        ></vaadin-number-field>
        <vaadin-button @click=${this.addItem}>Add</vaadin-button>
      </div>
      <h2>Shopping List</h2>
      <vaadin-grid .items=${this.groceryItems}>
        <vaadin-grid-column path="name" header="Item">
          <template> <strong>[[item]]</strong> </template>
        </vaadin-grid-column>
        <vaadin-grid-column
          path="quantity"
          header="Quantity"
        >
        <template> <strong>[[quantity]]</strong> </template>
      </vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  async addItem() {
    const saved = await this.binder.submitTo(GroceryEndpoint.save);
    if (saved) {
      this.groceryItems = [...this.groceryItems, saved];
      this.binder.clear();
    }
  }

  async connectedCallback() {
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
    this.groceryItems = await GroceryEndpoint.findAll();
  }
}
