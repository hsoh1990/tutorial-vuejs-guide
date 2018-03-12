<template>
  <div id="app">
    <div slot="header" id="header">
      <h3>Header Area</h3>
    </div>

    <div id="sidebar-wrapper">
      <h3>Sidebar</h3>
      <ul class="sidebar-nav">
        <navMenu/>
      </ul>
    </div>

    <div slot="page-content-wrapper" id="page-content-wrapper">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navMenu from './components/common/NavMenu';

export default {
  name: 'App',
  components: {
    navMenu
  }
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #header {
    width: 100%;
    padding: 20px;
    font-size: x-large;
  }

  #sidebar-wrapper {
    padding-top: 20px;
    display: table-cell;
    vertical-align: middle;
    position: fixed;
    width: 170px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .sidebar-nav {
    width: 170px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #page-content-wrapper {
    padding: 20px;
    margin-left: 170px;
  }
</style>
