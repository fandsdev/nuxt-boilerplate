<template>
  <div :class="$style.root">
    <BaseIconSprite />
    <TheNavbar />
    <div :class="$style.main">
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import BaseIconSprite from '~/components/_base/icon/_base-icon-sprite.vue';
import TheNavbar from '~/components/the-navbar.vue';

export default {
  components: {
    BaseIconSprite,
    TheNavbar,
  },
};
</script>

<style lang="postcss" module>
.main {
  max-width: 1300px;
  min-height: calc(100vh - var(--navbar-height));
  margin: auto;
}
</style>
