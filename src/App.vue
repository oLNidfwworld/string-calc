<template>
  <div class="flex justify-center">
    <div class="container">
      <SpringCalc/>
    </div>
  </div>
</template>

<script>
import SpringCalc from '@/components/SpringCalc'

export default {
  name: 'App',
  components: {
    SpringCalc
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
