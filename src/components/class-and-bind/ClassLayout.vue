<template>
  <div class="ClassLayout">
    ClassLayout
    <div v-bind:class="{ active: isActive }"></div>
    <div class="static"
         v-bind:class="{ active: isActive, 'text-danger': hasError }">
    </div>
  </div>
</template>

<script>
export default {
  name: 'class-layout',
  data: function () {
    return {
      isActive: true,
      hasError: false
    };
  }
};
</script>

<style scoped>

</style>
