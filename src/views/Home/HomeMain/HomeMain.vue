<template>
  <div class="main">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref('Home')
</script>

<style scoped></style>
