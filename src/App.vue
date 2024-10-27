<script>
import HomeAdmin from './components/admin/HomeAdmin.vue';

export default {
  name: 'App',
  components: {
    HomeAdmin
  }
}
</script>

<template>
  <body>
    <HomeAdmin/>
  </body>
</template>


<style scoped>
* {
  padding: 0;
  margin: 0;
}
#app, html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
