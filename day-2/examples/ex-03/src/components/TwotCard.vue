<template>
  <article class="twot-card">
    <pre class="twot-card-message">{{ twot.message }}</pre>
    <footer class="twot-card-footer">
      <span class="twot-like-counter">
        ❤ {{ twot.likes.length }}
      </span>
    </footer>
  </article>
</template>

<script>
export default { props: [ "twot" ] }
</script>

<style>

</style>
