<script>
export const messages = {
  en: {
    navbar: 'Navbar',
  }
}

export default {
  i18n: { messages },
}
</script>

<template>
  <div :class="$style.root">{{ $t('navbar') }}</div>
</template>

<style lang="postcss" module>
.root {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--navbar-height);
  color: var(--white-color);
  background-color: tomato;
}
</style>
