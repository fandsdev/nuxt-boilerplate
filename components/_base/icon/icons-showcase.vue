<script>
const svgSpriteSelector = '[data-svg-sprite]';

export default {
  computed: {
    availableIcons() {
      const svgSprite = document.querySelector(svgSpriteSelector);
      if (!svgSprite) return [];

      return [...svgSprite.children].map((element) => element.id);
    },
  },
};
</script>

<template>
  <div :class="$style.root">
    <template v-for="iconName of availableIcons">
      <span :key="`${iconName}-label`">{{ iconName }}</span>
      <BaseIcon :key="`${iconName}-icon`" :name="iconName" />
    </template>
  </div>
</template>


<style lang="postcss" module>
.root {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 8px;
}
</style>
