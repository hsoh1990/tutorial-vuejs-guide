<template>
  <nav class="app-nav">
      <router-link to="/" class="bar-item">
        <p>시작하기</p>
      </router-link>
      <router-link to="/component" class="bar-item">
        <p>컴포넌트</p>
      </router-link>
      <router-link to="/template-layout" class="bar-item">
        <p>템플릿 문법</p>
      </router-link>
      <router-link to="/computed-and-watch-layout" class="bar-item">
        <p>계산된 속성과 감시자</p>
      </router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav-menu'
};
</script>

<style>
  .app-nav {

  }
  .tab-bar p {
    font-size: medium;
  }
</style>
