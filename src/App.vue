<template>
  
  <PanelEquipoTareas></PanelEquipoTareas>
</template>

<script>
import PanelEquipoTareas from './components/PanelEquipoTareas.vue'
export default {
  name: 'App',
  components: {
    PanelEquipoTareas
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
