<template>
  <div :class="$style.root">
    <div :class="$style.greeting">Hello there 👋</div>
  </div>
</template>

<style module>
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
