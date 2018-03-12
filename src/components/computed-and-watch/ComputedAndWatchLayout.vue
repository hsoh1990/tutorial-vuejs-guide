<template>
  <div>
    <computed-properties/>
    -----------------------------------
    <watch></watch>
  </div>
</template>

<script>
import ComputedProperties from './ComputedProperties';
import Watch from './Watch';

export default {
  name: 'computed-and-watch-layout',
  components: {
    ComputedProperties,
    Watch
  }
};
</script>

<style scoped>

</style>
