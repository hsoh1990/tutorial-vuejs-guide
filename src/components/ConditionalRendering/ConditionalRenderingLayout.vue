<template >
<div>
  conditional rendering layout
  <h1 v-if="ok">Yes</h1>
  <h1 v-else>No</h1>

  <template v-if="templateOk" >
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>

  <div v-if="Math.random() > 0.5">
    이제 나를 볼 수 있어요
  </div>
  <div v-else>
    이제는 안보입니다
  </div>

  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>
</div>
</template>

<script>
export default {
  name: 'conditional-rendering-layout',
  data: function () {
    return {
      ok: true,
      templateOk: false,
      type: 'B'
    };
  }
};
</script>

<style scoped>

</style>
