<template>
    <PanelEquipoTareas/>
  </template>
  <script>
import PanelEquipoTareas from './components/PanelEquipoTareas.vue';

  export default {
    name: 'PanelUsuario',
    components: {
        PanelEquipoTareas
    }
  }
  </script>
  
  <style>
  #CrearCuenta {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>