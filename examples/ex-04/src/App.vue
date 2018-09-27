<template>
  <div id="app">
    <header class="app-header">
      <router-link to="/" class="app-backlink">
        <img src="twotter-logo.png" class="app-logo" />
      </router-link>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "assets/_includes";

.app-header {
  padding: 10px;
  border-bottom: 1px solid $twotter-blue;
}

.app-logo {
  width: 80px;
}

</style>
