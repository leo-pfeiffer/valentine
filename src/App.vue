<template>
  <div id="app">
    <Valentine/>
  </div>
</template>

<script>
import Valentine from './components/Valentine.vue'

export default {
  name: 'App',
  components: {
    Valentine
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a00c0;
}

::-webkit-scrollbar {
  display: none;
}
</style>
