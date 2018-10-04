const Modal = {
      
  props: [ "title" ],
  created() {
    window.addEventListener("keyup", this.handleKeyUp);
  },
  destroyed() {
    window.removeEventListener("keyup", this.handleKeyUp);
  },
  template: `

  <div class="modal-layer" @click.self="close">
    <div class="modal-container">
      <header class="modal-header">
        <slot name="title">
          <h1 class="modal-heading">
            {{ title }}
          </h1>
        </slot>
        <button class="modal-close-control" @click="close" />
      </header>
      <slot />
    </div>
  </div>

  `,
  data() {
    return { isOpen: false }
  },
  methods: {
    close() { this.$emit("close"); },
    handleKeyUp(event) {
      if (event.key == "Escape") {
        this.$emit("close");
      }
    }
  }
};