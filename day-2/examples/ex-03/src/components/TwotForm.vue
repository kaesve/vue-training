<template>
   <form>
    <textarea name="message" v-model="message" @submit.prevent="handleSubmit"></textarea>
    <footer>
      <p v-if="isInvalid" class="warning-message">
        The current message is either too long or too short.
      </p>
  
      <span>{{ message.length }}/255</span>
      <button type="button" :disabled="message.length == 0" @click="message = ''">
        Clear
      </button>
      <button type="submit" :disabled="isInvalid">Send</button>
    </footer>
  </form>
</template>

<script>
export default {
  name: "TwotForm",
  data() {
    return { message: "I love Twotter!" };
  },
  computed: {
    isInvalid() {
      return this.message.length == 0 || this.message.length > 255;
    }
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.message);
    }
  }
}
</script>

<style>

.warning-message {
  color: red;
}
</style>
