import { LitElement, html, css } from 'https://unpkg.com/lit-element?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map?module';

class HelloingWorld extends LitElement {

  static get properties() {
    return {
      loudness: { type: Number }
    }
  }

  static get styles() {
    return css`
      .hello-world {
        margin: 1rem 0 0 0;
        white-space: nowrap;
      }
    `;
  }

  constructor() {
    super();
    this.loudness = 42;
  }

  render() {
    return html`
      <header>
        <button @click=${this.quieterClickHandler}>Quieter</button>
        <button @click=${this.louderClickHandler}>Louder</button>
        <span>Current Volume: ${this.loudness}px</span>
      </header>
      <p class="hello-world" 
        style=${styleMap({ fontSize: `${this.loudness}px` })}>Hello World</p>
    `;
  }

  quieterClickHandler(event) {
    this.loudness = Math.max(this.loudness - 1, 0);
  }

  louderClickHandler(event) {
    this.loudness += 1;
  }
}

customElements.define('helloing-world', HelloingWorld);