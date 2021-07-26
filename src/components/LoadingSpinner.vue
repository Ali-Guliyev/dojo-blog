<template>
  <div class="spinner"></div>
</template>

<style>
.spinner {
  width: 60px;
  height: 60px;
  margin: 30px auto;
  border: 4px solid transparent;
  border-radius: 50%;
  border-top-color: #fd8f00;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
