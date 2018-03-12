<template>

  <div>
    <span v-if="seen">이제 나를 볼 수 있어요</span>
    <button v-on:click="toggle">seen</button>
    <button @click="toggle">seen</button>
  </div>
</template>

<script>
export default {
  name: 'directive',
  data () {
    return {
      seen: true
    };
  },
  methods: {
    toggle: function () {
      if (this.seen) {
        this.seen = false;
      } else {
        this.seen = true;
      }
    }
  }
};
</script>

<style scoped>
  span {
    font-weight: normal;
    font-size: medium;
  }
</style>
