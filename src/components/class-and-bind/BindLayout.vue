<template>
<div class="BindLayout">
  BindLayout
  <div v-bind:class="classObject"></div>
</div>
</template>

<script>
export default {
  name: 'bind-layout',
  data: function () {
    return {
      isActive: true,
      error: null
    };
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      };
    }
  }
};
</script>

<style scoped>

</style>
