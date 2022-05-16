import { html, LitElement } from "lit";
import { customElement } from "./decorators";
import { property } from "lit/decorators.js";

@customElement("otelul-galati")
export class OtelulGalati extends LitElement {
  @property()
  slowed: boolean = false;

  private normal = "https://www.youtube.com/embed/nX2M7nzXWqA?autoplay=1";
  private reverb = "https://www.youtube.com/embed/9XW9qWGilv4?autoplay=1";

  getUrl() {
    if (this.slowed) return this.reverb;
    return this.normal;
  }

  render() {
    return html`
      <iframe
        style="display: none"
        width="1"
        height="1"
        src=${this.getUrl()}
      >
      </iframe>
      <slot></slot>
    `;
  }
}
