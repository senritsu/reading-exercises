<script setup lang="ts">

</script>

<template>
  <kbd>
    <slot />
  </kbd>
</template>

<style scoped>
kbd {
  border: 1px solid #707070;
  border-radius: 4px;
  padding: 2px 4px;
  background-color: #414141;
  box-shadow: 0 2px 0 rgba(255, 255, 255, 0.2);
}
</style>
