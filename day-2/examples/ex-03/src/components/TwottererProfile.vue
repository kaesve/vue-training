<template>
  <div class="twotterer-profile-container">
    <div class="loader-container" v-if="isLoading">
      <span>Loading</span>
    </div>
    <div class="error-message" v-else-if="! twotterer">
      <p>
        Could not load this profile.
      </p>
    </div>
    <template v-else>
      <header class="twotterer-profile-header">
        {{ twotterer.username }} <span class="twotterer-profile-likes-badge">❤ {{ likes }}</span>
      </header>
      <div class="twot-list">
        <twot-card v-for="twot in twotterer.twots" :key="twot.id" :twot="twot" />
      </div>

    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: [ 'twottererId' ],
  components: { TwotCard },
  created() {
    // Fetch the data here
    axios.get("http://localhost:8888/twotterers/" + this.twottererId)
      .then(response => {
        this.isLoading = false;
        this.twotterer = response.data;
      })
      .catch(() => this.isLoading = false);
  },
  data() {
    return {
      isLoading: true,
      twotterer: null
    };
  },
  computed: {
    likes() {
      let count = 0;
      if (this.twotterer) {
        this.twotterer.twots.forEach(twot => count += twot.likes.length);
      }

      return count;
    }
  },
}
</script>

<style>

</style>
