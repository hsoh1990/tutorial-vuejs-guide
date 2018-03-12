<template>
  <div>
    <interpolation/>
    -----------------------------------
    <directive/>
  </div>
</template>

<script>
import Interpolation from './Interpolation';
import Directive from './Directive';

export default {
  name: 'template-layout',
  components: {
    Interpolation,
    Directive
  }
};
</script>

<style scoped>
  h2 {
    font-weight: normal;
    font-size: large;
  }

  span {
    font-weight: normal;
    font-size: medium;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
