 customElements.define("archisman-editor", class extends HTMLElement {
    constructor() {
      super();

      // Attach the shadow root
      this.attachShadow({ mode: "open" });

      // Clone the template and add it to the shadow root
      const template = document.querySelector("#archisman-editor-template");
      const instance = template.content.cloneNode(true);
      this.shadowRoot.appendChild(instance);

      // Get references to the elements
      this.textarea = this.shadowRoot.querySelector("#archisman-editor-textarea");
      this.info = this.shadowRoot.querySelector("#archisman-editor-info");

      // Update the information when the textarea changes
      this.textarea.addEventListener("input", this.updateInfo.bind(this));
    }

    updateInfo() {
      const value = this.textarea.value;
      const characters = value.length;
      const words = value.split(/\s+/).length;
      const lines = value.split(/\r\n|\r|\n/).length;
      this.info.textContent = `${characters} characters, ${words} words, ${lines} lines`;
    }
  });