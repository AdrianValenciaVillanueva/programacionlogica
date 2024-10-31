<template>
    <CrearUComp/>
  </template>
  <script>
import CrearUComp from './components/CrearUComp.vue';

  export default {
    name: 'CrearCuenta',
    components: {
        CrearUComp
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