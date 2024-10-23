<template>
    <div class="text-center mt-4">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="text-muted mt-2">{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: {
      type: String,
      default: 'Loading...',
    },
  });
  </script>
  
  <style scoped>
  .spinner-border {
    width: 3rem;
    height: 3rem;
  }
  </style>
