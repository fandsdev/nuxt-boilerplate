<script>
export const messages = {
  en: {
    greeting: 'Hello there 👋',
  },
};

export default {
  i18n: { messages },
};
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.greeting">{{ $t('greeting') }}</div>
  </div>
</template>

<style lang="postcss" module>
.root {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
}

.greeting {
  font-size: 120px;
}

@media (--small-vp) {
  .greeting {
    font-size: 40px;
  }
}
</style>
