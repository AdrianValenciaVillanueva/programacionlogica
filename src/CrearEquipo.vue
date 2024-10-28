<template>
    <CrearEComp/>
</template>
  
<script>
  import CrearEComp from './components/CrearEComp.vue';
  /*patitas suaves */
  export default {
    name: 'CrearEquipo',
    components: {
      CrearEComp
    }
  }
</script>
  
  <style>
  #CrearEquipo {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>