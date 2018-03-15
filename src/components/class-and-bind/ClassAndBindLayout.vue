<template>
  <div class="ClassAndBindLayout">
    <span>class-and-bind-layout</span>

    <router-link to="/class-and-bind-layout/class-layout">
      <p>Class</p>
    </router-link>
    <router-link to="/class-and-bind-layout/bind-layout">
      <p>Bind</p>
    </router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'class-and-bind-layout'
};
</script>

<style scoped>

</style>
