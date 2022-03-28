<template>
  <svg :class="$style.root">
    <use :href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" module>
.root {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentcolor;
}
</style>
