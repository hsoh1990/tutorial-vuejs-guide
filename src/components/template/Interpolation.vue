<template>
  <div>
    <h2>interpolation {{msg}}</h2>
    <span v-once> {{once}}는 일회성 보간을 수행합니다 </span>
    <br/><br/>

    <span>Using mustaches:{{rawHtml}}</span><br/>
    <span>Using v-html directive:<span v-html="rawHtml"></span></span>
    <br/><br/>

    <div v-bind:id="'list-' + id"></div>
    <button v-bind:disabled="isButtonDisabled">null, undefined, false</button>
    <br/><br/>

    <span>{{id+1}} / {{isButtonDisabled ? 'YES' : 'No' }} / JavaScript 문법사용 가능</span>
    <br/><br/>
  </div>
</template>

<script>
export default {
  name: 'interpolation',
  data () {
    return {
      msg: 'Welcome to interpolation Vue.js App',
      once: 'v-once',
      rawHtml: '<span style="color:red">This should be red',
      id: 1,
      isButtonDisabled: false
    };
  }
};
</script>

<style scoped>
  h2 {
    font-weight: normal;
    font-size: x-large;
  }

  span {
    font-weight: normal;
    font-size: medium;
  }
</style>
